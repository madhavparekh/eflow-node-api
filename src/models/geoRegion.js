'use strict';

module.exports = (sequelizeClient, DataTypes) => {
  const geoRegion = sequelizeClient.define('GeoRegion', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    abbreviation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
  geoRegion.associate = models => {
    geoRegion.hasMany(models.GeoClass, {
      foreignKey: 'geoRegionId',
      as: 'geoClasses',
    });
  };
  return geoRegion;
};
