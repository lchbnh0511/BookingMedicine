'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medicinebilldetail', {
      billdetailID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      billID: {
        type: Sequelize.INTEGER
      },
      nameMedicine: {
        type: Sequelize.STRING
      },
      dose: {
        type: Sequelize.STRING
      },
      count: {
        type: Sequelize.INTEGER 
      },
      note: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('medicinebilldetail');
  }
};