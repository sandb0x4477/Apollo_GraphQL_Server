import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    bicycles: [Bicycle!]
    bicycle(id: ID!): Bicycle
  }

  extend type Mutation {
    createBicycle(bicycleModel: String!, bicycleRate: Float!): Bicycle!
    deleteBicycle(id: ID!): Boolean!
    updateBicycle(id: ID!, bicycleModel: String!, bicycleRate: Float!): Bicycle!
  }

  type Bicycle {
    id: ID!
    bicycleModel: String!
    bicycleRate: Float!
  }

`;
