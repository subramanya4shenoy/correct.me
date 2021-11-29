const User = require('../Models/user');
const Feedback = require('../Models/Feedback');

const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        me: (parents, args, { user, authStaus }) => {
            if (authStaus) { 
                return true; 
            }
            return false; 
        },

        getFeedbacks: async function (parents, args, context) {
            const { user, authStaus } = context;
            if (authStaus) {
                console.log(user);
                const getUserFeedBacks = await User.findOne({ userID: user.userID });
                if (getUserFeedBacks) {
                    console.log("user data ===>", getUserFeedBacks);
                    const allFeedbacksForCurrentUser = await Feedback.find({ _id: { $in: getUserFeedBacks.feedback_recieved } })
                    if (allFeedbacksForCurrentUser) {
                        console.log("feedback data ===>", allFeedbacksForCurrentUser);
                        return allFeedbacksForCurrentUser;
                    } else {
                        return [];
                    }
                } else {
                    console.log("user doesnot exists")
                }
            } else {
                console.log("not authorised")
            }
            return [];
        },


        getShareLink: async function (parent, args, context) {
            const { user, authStaus } = context;
            let userId = '';
            if (authStaus) {
                const currentUser = await User.findOne({ userID: user.userID })
                if (currentUser) {
                    userId = currentUser._id.toString();
                } else {
                    console.log("usr not found");
                }
                return userId
            }
            return "relogin"
        }
    },

    Mutation: {
        postFeedback: async function (parent, args) {
            const { id, message } = args;
            const toUser = await User.findOne({ _id: id })
            if (toUser) {
                const createdFeedback = await new Feedback({ message: message });
                if (createdFeedback) {
                    console.log("create Feedback==>", createdFeedback._id.toString());
                    toUser.feedback_recieved.push(createdFeedback._id.toString());
                    toUser.save();
                    createdFeedback.save();
                    return true;
                } else {
                    console.log("Feedback creation failed");
                }
            } else {
                console.log("User doesnot exists");
            }
            return false;
        },

        deleteFeedback: async function (parent, args, { user, authStaus }) {
            const { id } = args;
            console.log(id, user);
            if (authStaus) {
                const removeFeedback = await Feedback.find({ _id: id }).remove().exec();
                if (removeFeedback) {
                    let currentUser = await User.findOne({ userID: user.userID });
                    if (currentUser) {
                        console.log("currentUser ==>", currentUser);
                        currentUser.feedback_recieved.splice(currentUser.feedback_recieved.indexOf(id), 1);
                        currentUser.save();
                        return true;
                    }
                } else {
                    console.log("remove was failure");
                }
            } else {
                console.log("Not authorised");
            }
            return false;
        },

        AuthenticateFacebookUser: async function (parent, args, { user, authStaus }) {
            const { userID, accessToken, name, graphDomain } = args;
            const userDoc = await User.findOne({ userID: userID });
            // if user not found create new one
            if (!userDoc) {
                const tempUser = await new User({ userID: userID, name: name, source: graphDomain, feedback_recieved: [], feedback_given: [] });
                if (tempUser) {
                    const succesfullysaved = await tempUser.save();
                    if (!succesfullysaved) { console.log("error saving data"); }
                    else {
                        // generate jwt and return
                        const token = jwt.sign({
                            userID: userID,
                            accessToken: accessToken
                        }, process.env.JWT_SECRET, { expiresIn: '1h' });
                        return ({ name: "subu", id: userID, accessToken: token })
                    }
                }
            }
            // if user found generate jwt and send
            const token = jwt.sign({
                userID: userID,
                accessToken: accessToken
            }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return ({ name: userDoc.name, id: userID, accessToken: token })
        }
    }
}

module.exports = { resolvers }
