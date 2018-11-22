const rental = (sequelize, DataTypes) => {
  const Rental = sequelize.define('rental', {
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    rentalFee: {
      type: DataTypes.DECIMAL(10, 2),
    }

  });

  // Rental.associate = models => {
  //   Rental.hasOne(models.Bicycle, { foreignKey: 'bicycleId', onDelete: 'CASCADE' });
  // };

  return Rental;
}

export default rental;
