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

        getUserWithId: async (parent, args) => {
            const { id } = args;
            const getUserInfo = await User.findOne({ _id: id });
            if (getUserInfo) {
                return getUserInfo.short_name;
            } else {
                const error = new Error('User Not Found!');
                error.code = 401;
                throw error;
            }
        },

        getFeedbacks: async function (parents, args, context) {
            const { user, authStaus } = context;
            if (authStaus) {
                const getUserFeedBacks = await User.findOne({ userID: user.userID });
                if (getUserFeedBacks) {
                    const allFeedbacksForCurrentUser = await Feedback.find({ _id: { $in: getUserFeedBacks.feedback_recieved } })
                    if (allFeedbacksForCurrentUser) {
                        return allFeedbacksForCurrentUser;
                    } else {
                        return [];
                    }
                } else {
                    const error = new Error('User Not Found!');
                    error.code = 401;
                    throw error;
                }
            } else {
                const error = new Error('User Not authenticated!');
                error.code = 401;
                throw error;
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
                    const error = new Error('User Not found');
                    error.code = 401;
                    throw error;
                }
                return userId
            }
            const error = new Error('User Not authenticated');
            error.code = 401;
            throw error;
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
                    const error = new Error('Feedback creation failed');
                    error.code = 401;
                    throw error;
                }
            } else {
                const error = new Error('User doesnot exists');
                error.code = 401;
                throw error;
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
                        currentUser.feedback_recieved.splice(currentUser.feedback_recieved.indexOf(id), 1);
                        currentUser.save();
                        return true;
                    }
                } else {
                    const error = new Error('Not able to remove the feedback');
                    error.code = 401;
                    throw error;
                }
            } else {
                const error = new Error('Not authenticated');
                error.code = 401;
                throw error;
            }
            return false;
        },

        AuthenticateFacebookUser: async function (parent, args, { user, authStaus }) {
            const { userID, accessToken, name, email, short_name, graphDomain } = args;
            const userDoc = await User.findOne({ userID: userID });
            // if user not found create new one
            if (!userDoc) {
                const tempUser = await new User({ userID: userID, name: name, source: graphDomain, short_name: short_name, email: email, feedback_recieved: [], feedback_given: [] });
                if (tempUser) {
                    const succesfullysaved = await tempUser.save();
                    if (!succesfullysaved) {
                        const error = new Error("daving failed");
                        error.code = 401;
                        throw error;
                     }
                    else {
                        // generate jwt and return
                        const token = jwt.sign({
                            userID: userID,
                            accessToken: accessToken
                        }, process.env.JWT_SECRET, { expiresIn: '1h' });
                        return ({ name: name, id: userID, accessToken: token, short_name: short_name})
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
