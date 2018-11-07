export default {
  Query: {
    bicycles: async (parent, args, { models }) => {
      return await models.Bicycle.findAll();
    },
    bicycle: async (parent, { id }, { models }) => {
      return await models.Bicycle.findByPk(id);
    },
  },
}

