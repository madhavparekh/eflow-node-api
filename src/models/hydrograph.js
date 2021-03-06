'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const Hydrograph = sequelizeClient.define('Hydrograph', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.ARRAY(DataTypes.DECIMAL(10, 2)), // eslint-disable-line
      allowNull: true,
    },
    percentille: {
      type: DataTypes.ENUM,
      values: [
        'TEN',
        'TWENTYFIVE',
        'FIFTY',
        'SEVENTYFIVE',
        'NINTY',
        'MIN',
        'MAX',
      ],
    },
    type: {
      type: DataTypes.ENUM,
      values: ['GAUGE', 'CLASS'],
    },
  });
  Hydrograph.associate = models => {
    Hydrograph.belongsTo(models.Gauge, {
      foreignKey: 'gaugeId',
      as: 'gauge',
    });
    Hydrograph.belongsTo(models.Classification, {
      foreignKey: 'classId',
      as: 'class',
    });
  };
  return Hydrograph;
};
