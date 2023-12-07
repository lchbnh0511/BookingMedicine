'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medicine.init({
    medicineID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nameMedicine: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'medicine',
    tableName: 'medicine'
  });
  return medicine;
};