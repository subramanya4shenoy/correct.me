const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolver');
const auth = require('./middleware/Auth');

dotenv.config();

const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: auth
});
server.applyMiddleware({ app });
// app.use(bodyParser.json());
// app.use(auth);

mongoose
    .connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.s8zg4.mongodb.net/${process.env.MONGO_DB_DEFAULT_DB}?retryWrites=true&w=majority`)
    .then(result => {
        app.listen(process.env.PORT);
        console.log("connected to mongoDB")
    })
    .catch(err => {
        console.log("error Mongoose", err);
    })