'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicinebilldetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  medicinebilldetail.init({
    billdetailID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    billID:  DataTypes.INTEGER,

    nameMedicine: DataTypes.STRING,

    dose: DataTypes.STRING,
    count: DataTypes.INTEGER,
    note: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'medicinebilldetail',
    tableName: 'medicinebilldetail'
  });
  return medicinebilldetail;
};