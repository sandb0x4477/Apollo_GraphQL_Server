import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    users: [User!]
    user(id: ID!): User!
  }

  extend type Mutation {
    register(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): Token!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    # password: String!
  }

`;
