'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicinebill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medicinebill.init({
    billID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id: DataTypes.INTEGER,
    customerName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    customerWeight: DataTypes.INTEGER,
    customerGender: DataTypes.INTEGER,
    customerBHYT: DataTypes.STRING,
    customerCCCD: DataTypes.STRING,
    customerCode: DataTypes.STRING,
    customerPhoneNumber: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    customerProb: DataTypes.STRING,
    date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'medicinebill',
    tableName: 'medicinebill'
  });
  return medicinebill;
};