const User = require('../Models/user');
const jwt = require('jsonwebtoken');

const resolvers = {
    Query: {
        getFeedbacks(parents, args) {
            let { type } = args;
            if (type === 'Given') {
                return [{ message: "given 1" }, { message: "given 2 " }, { message: "given 1" }, { message: "given 2 " }];
            } else {
                return [{ message: "received 1" }, { message: "receiver 2 " }];
            }
        },


        getShareLink() {
            return "https://cm.com/gf/122111"
        }
    },

    Mutation: {
        postFeedback(parent, args) {
            const { message } = args;
            return { message: `${message}` };
        },

        deleteFeedback(parent, args) {
            const { id } = args;
            return true;
        },

        AuthenticateFacebookUser: async function(parent, args) {
            const { userID, accessToken, name, graphDomain } = args;
            const userDoc = await User.findOne({ userID: userID});
            // if user not found create new one
            if(!userDoc) {
                const tempUser = await new User({ userID: userID, name: name, source: graphDomain }); 
                if(tempUser) {
                    const succesfullysaved = await tempUser.save();
                    if(!succesfullysaved) { console.log("error saving data"); } 
                    else {
                        // generate jwt and return
                        const token = jwt.sign({
                            userID: userID,
                            accessToken: accessToken
                        }, process.env.JWT_SECRET, { expiresIn: '1h' });            
                        return ({ name: "subu", id:userID, accessToken: token })
                    }
                } 
            }
            // if user found generate jwt and send
            const token = jwt.sign({
                userID: userID,
                accessToken: accessToken
            }, process.env.JWT_SECRET, { expiresIn: '1h' });

            return ({ name: userDoc.name, id:userID, accessToken: token })
        }
    }
}

module.exports = { resolvers }