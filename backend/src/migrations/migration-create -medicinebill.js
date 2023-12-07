'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medicinebill', {
      billID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.DATE
      },
      customerWeight: {
        type: Sequelize.INTEGER
      },
      customerGender: {
        type: Sequelize.INTEGER
      },
      customerBHYT: {
        type: Sequelize.STRING
      },
      customerCCCD: {
        type: Sequelize.STRING
      },
      customerCode: {
        type: Sequelize.STRING
      },
      customerPhoneNumber: {
        type: Sequelize.STRING
      },
      customerAddress: {
        type: Sequelize.STRING
      },
      customerProb: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('medicinebill');
  }
};