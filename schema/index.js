import { gql } from 'apollo-server-express';

import customerSchema from './customer';
import bicycleSchema from './bicycle';
import rentalSchema from './rental';
import userSchema from './user';

const linkSchema = gql`

  scalar Date

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, customerSchema, bicycleSchema, rentalSchema, userSchema];
