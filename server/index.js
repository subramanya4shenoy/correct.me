const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/schema');
const { resolvers } = require('./graphql/resolver');
const app = express();
const auth = require('./middleware/Auth');

const server = new ApolloServer({typeDefs, resolvers});
server.applyMiddleware({app});

dotenv.config();
app.use(bodyParser.json());
app.use(auth);

app.use((req, res, next) => {
    console.log("server express started");
})

mongoose
.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.s8zg4.mongodb.net/${process.env.MONGO_DB_DEFAULT_DB}?retryWrites=true&w=majority`)
.then(result => {
    app.listen(process.env.PORT);
    console.log("connected to mongoDB")
})
.catch( err => {
    console.log("error Mongoose", err);
})