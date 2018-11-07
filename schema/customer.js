import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    customers: [Customer!]
    customer(id: ID!): Customer
  }

  extend type Mutation {
    createCustomer(customerName: String!): Customer!
    deleteCustomer(id: ID!): Boolean!
    updateCustomer(id: ID!, customerName: String): Customer!
  }

  type Customer {
    id: ID!
    customerName: String!
  }

`;
