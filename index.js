import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import jwt from 'jsonwebtoken';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import resolvers from './resolvers';
import models, { sequelize } from './models';

const app = express();
const SECRET = process.env.SECRET;

const getAuthUser = async req => {
  const token = req.headers.authorization || '';

  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new Error(
        'Your session expired. Sign in again.',
      );
    }
  }
};

app.use(cors('*'));
// app.use(addUser);


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async ({req}) => {
    const authUser = await getAuthUser(req);
    return {
      models,
      SECRET,
      authUser,
    }
  },
});

server.applyMiddleware({ app, path: '/graphql' });

sequelize.sync().then(async () => {
  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});
