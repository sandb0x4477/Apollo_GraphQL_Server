const customer = (sequelize, DataTypes) => {
  const Customer = sequelize.define('customer', {
    customerName: {
      type: DataTypes.STRING,
    }
  });

  return Customer;
}

export default customer;
