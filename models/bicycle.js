const bicycle = (sequelize, DataTypes) => {
  const Bicycle = sequelize.define('bicycle', {
    bicycleModel: {
      type: DataTypes.STRING,
    },
    bicycleRate: {
      type: DataTypes.DECIMAL(10, 2),
    }

  });

  return Bicycle;
}

export default bicycle;
