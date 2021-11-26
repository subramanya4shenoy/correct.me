
const resolvers = {
    Query: {
        getAllFeedbacks() {
            return [{message: "first message"}, {message: "second"}];
        },

        getAllGivenFeedbacks() {
            return [{feedback:[{message: "first message"}, {message: "second"}], user:{name:"s", profilePic: "b"}}, 
                    {feedback:[{message: "first message"}, {message: "second"}], user:{name:"Q", profilePic: "W"}}];
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