const bicycle = (sequelize, DataTypes) => {
  const Bicycle = sequelize.define('bicycle', {
    bicycleModel: {
      type: DataTypes.STRING,
    },
    bicycleRate: {
      type: DataTypes.DECIMAL(10, 2),
    }

  });

  // Bicycle.associate = models => {
  //   Bicycle.hasOne(models.Rental);
  // };

  return Bicycle;
}

export default bicycle;
