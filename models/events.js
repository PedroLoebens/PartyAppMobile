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
    name: DataTypes.STRING,
    place: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING.BINARY
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};