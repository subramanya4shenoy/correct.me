
const resolvers = {
    Query: {
        getFeedbacks(parents, args) {
            let { type } = args;
            if(type === 'Given') {
             return [{message: "given 1"}, {message: "given 2 "}, {message: "given 1"}, {message: "given 2 "}];
            } else {
                return [{message: "received 1"}, {message: "receiver 2 "}];
            }
        },


        getShareLink() {
            return "https://cm.com/gf/122111"
        }
    },

    Mutation: {
        postFeedback(parent, args) {
            const { message } = args;
            return {message: `${message}`};
        },

        deleteFeedback(parent, args) {
            const { id } = args;
            return true;
        },

        AuthenticateFacebookUser(parent, args) {
            return ({name: "subu", profilePic: "https://5.imimg.com/data5/PD/CS/MY-28139693/fresh-hapus-mango-500x500.jpg", accessToken: "awdwwwwq_Token"})
        }
    }
}

module.exports = { resolvers }