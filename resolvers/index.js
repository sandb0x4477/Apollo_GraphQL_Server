import { GraphQLDate } from 'graphql-iso-date';


import customerResolvers from './customer';
import bicycleResolvers from './bicycle';
import rentalResolvers from './rental';
import userResolvers from './user';

const customScalarResolver = {
  Date: GraphQLDate,
};

export default [customerResolvers,
  bicycleResolvers,
  rentalResolvers,
  customScalarResolver,
  userResolvers
];
