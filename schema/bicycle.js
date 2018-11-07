import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    bicycles: [Bicycle!]
    bicycle(id: ID!): Bicycle
  }

  type Bicycle {
    id: ID!
    bicyclemmodel: String!
    bicyclerate: Float!
  }
  
`;
