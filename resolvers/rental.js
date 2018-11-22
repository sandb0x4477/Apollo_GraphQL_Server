export default {
  // ===========================================================================
  // ? QUERIES
  // ===========================================================================
  Query: {
    rentals: async (parent, args, { models }) => {
      return await models.Rental.findAll();
    },
    rental: async (parent, { id }, { models }) => {
      return await models.Rental.findByPk(id);
    },
  },

  // =============================================================================
  // ? MUTATIONS
  // =============================================================================
  Mutation: {
    createRental: async (parent, { startDate, endDate, rentalFee, bicycleId, customerId }, { models }) => {
      const rental = {
        startDate,
        endDate,
        rentalFee,
        bicycleId,
        customerId
      };

      return await models.Rental.create(rental);
    },


  },

  Rental: {
    bicycle: async (rental, args, { models }) => {
      return await models.Bicycle.findOne({
        where: {
          id: rental.bicycleId,
        }
      });
    },
    customer: async (rental, args, { models }) => {
      return await models.Customer.findOne({
        where: {
          id: rental.customerId,
        }
      });
    }
  },
}
