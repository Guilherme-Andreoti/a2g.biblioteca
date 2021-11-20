import {ApolloServer} from "apollo-server";
import mongoose from "mongoose";

require('dotenv').config()

function startServer({typeDefs,resolvers}){
    mongoose.connect(process.env.DB_HOST,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD
    })
    const server = new ApolloServer({typeDefs,resolvers});
    server.listen().then(({url}) => console.log(`Server started at ${url}`));
}

export default startServer; 