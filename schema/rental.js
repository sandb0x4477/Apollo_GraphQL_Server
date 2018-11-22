import { gql } from 'apollo-server-express';

export default gql`

  extend type Query {
    rentals: [Rental!]
    rental(id: ID!): Rental
  }

  extend type Mutation {
    createRental(startDate: Date!, endDate: Date!, rentalFee: Float!, bicycleId: String, customerId: String): Rental!
    # deleteBicycle(id: ID!): Boolean!
    # updateBicycle(id: ID!, Make: String!, Model: String!, Rate: Float!): Bicycle!
  }

  type Rental {
    id: ID!
    startDate: Date!
    endDate: Date!
    rentalFee: Float!
    bicycle: Bicycle!
    customer: Customer!
  }

`;
