export default {
  // ===========================================================================
  // ? QUERIES
  // ===========================================================================
  Query: {
    customers: async (parent, args, { models }) => {
      return await models.Customer.findAll();
    },
    customer: async (parent, { id }, { models }) => {
      return await models.Customer.findByPk(id);
    },
  },

  // =============================================================================
  //? MUTATIONS
  // =============================================================================
  Mutation: {
    createCustomer: async (parent, { customerName }, { models }) => {
      const customer = {
        customerName
      };

      return await models.Customer.create(customer);
    },

    deleteCustomer: async (parent, { id }, { models }) => {
      return await models.Customer.destroy({ where: { id } });
      // const response = `Customer with id: '${id}' deleted!`;
      // return `Customer with id: '${id}' deleted!`;
    },

    updateCustomer: async (parent, { id, customerName }, { models }) => {
      await models.Customer.update(
        { customerName: customerName },
        { where: { id: id } });

      const customer = await models.Customer.findByPk(id);
      return customer;
    },

  }
}
