
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
        }
    }
}

module.exports = { resolvers }