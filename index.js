import 'dotenv/config';
import cors from 'cors';
import uuidv4 from 'uuid/v4';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

app.use(cors());

let customers = {
  1: {
    id: '1',
    customerName: 'Robin Wieruch'
  },
  2: {
    id: '2',
    customerName: 'Dave Davids'
  },
};

let bicycles = {
  1: {
    id: '1',
    bicyclemmodel: 'Tornado 40',
    bicyclerate: 12.89
  },
  2: {
    id: '2',
    bicyclemmodel: 'Trek 690',
    bicyclerate: 14.99
  },
};

const schema = gql`
  type Query {
    customers: [Customer!]
    customer(id: ID!): Customer

    bicycles: [Bicycle!]
    bicycle(id: ID!): Bicycle
  }

  type Mutation {
    createCustomer(customerName: String!): Customer!
    deleteCustomer(id: ID!): Boolean!
    updateCustomer(id: ID!, customerName: String): Customer!
  }


  type Customer {
    id: ID!
    customerName: String!
  }
  type Bicycle {
    id: ID!
    bicyclemmodel: String!
    bicyclerate: Float!
  }
`;

const resolvers = {
  Query: {
    customers: () => {
      return Object.values(customers);
    },
    customer: (parent, { id }) => {
      return customers[id];
    },
    bicycles: () => {
      return Object.values(bicycles);
    },
    bicycle: (parent, { id }) => {
      return bicycle[id];
    },
  },

  Mutation: {
    createCustomer: (parent, { customerName }) => {
      const id = uuidv4();
      const customer = {
        id,
        customerName
      };

      customers[id] = customer;

      return customer;
    },

    deleteCustomer: (parent, { id }) => {
      const { [id]: customer, ...otherCustomers } = customers;

      if (!customer)
      {
        return false;
      }

      customers = otherCustomers;
      return true;
    },

    updateCustomer: (parent, {id, customerName}) => {
      if (!customers[id]) {
        throw new Error('No Customer with id: ' + id)
      }

      customers[id].customerName = customerName;

      const customer = {
        id,
        customerName
      }
      return customer;

      // return new Customer(id, customerName);
    }
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});


server.applyMiddleware({ app, path: '/graphql' });

app.listen({
  port: 8000
}, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});
