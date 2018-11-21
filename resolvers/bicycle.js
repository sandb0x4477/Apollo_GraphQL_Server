export default {
  // ===========================================================================
  // ? QUERIES
  // ===========================================================================
  Query: {
    bicycles: async (parent, args, { models }) => {
      return await models.Bicycle.findAll();
    },
    bicycle: async (parent, { id }, { models }) => {
      return await models.Bicycle.findByPk(id);
    },
  },

  // =============================================================================
  // ? MUTATIONS
  // =============================================================================
  Mutation: {
    createBicycle: async (parent, { bicycleModel, bicycleRate }, { models }) => {
      const bicycle = {
        bicycleModel,
        bicycleRate
      };

      return await models.Bicycle.create(bicycle);
    },

    deleteBicycle: async (parent, { id }, { models }) => {
      return await models.Bicycle.destroy({ where: { id } });
    },

    updateBicycle: async (parent, { id, bicycleModel, bicycleRate }, { models }) => {
      await models.Bicycle.update(
        { bicycleModel: bicycleModel,
          bicycleRate: bicycleRate },
        { where: { id: id } });

      const bicycle = await models.Bicycle.findByPk(id);
      return bicycle;
    },
  }
}
