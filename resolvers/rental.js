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
    createRental: async (parent, { startDate, endDate, rentalFee }, { models }) => {
      const rental = {
        startDate,
        endDate,
        rentalFee
      };

      return await models.Rental.create(rental);
    },

    // Rental: {
    //   bicycle: async (rental, args, { models }) => {
    //     return await models.Bicycle.findAll({
    //       where: {
    //         rentalId: rental.id,
    //       }
    //     });
    //   }
    // }

  }
}
