import { gql } from 'apollo-server-express';

import customerSchema from './customer';
import bicycleSchema from './bicycle';

const linkSchema = gql`
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

export default [linkSchema, customerSchema, bicycleSchema];
