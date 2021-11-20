
const resolvers = {
    Query: {
        getAllFeedBacks() {
            return [{message: "first message"}, {message: "second"}];
        }
    },
}

module.exports = { resolvers }