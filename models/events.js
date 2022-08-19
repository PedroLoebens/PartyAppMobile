'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsTo(models.User);
    }
  }
  Events.init({
    name: DataTypes.STRING(100),
    musicStyle: DataTypes.STRING(150),
    place: DataTypes.STRING(150),
    date: DataTypes.STRING(11),
    price: DataTypes.STRING(30),
    image: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};