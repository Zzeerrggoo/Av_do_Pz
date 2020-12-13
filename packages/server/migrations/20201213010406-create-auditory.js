'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Auditories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      departmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Departments',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      auditoryName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notUsed: {
        type: Sequelize.BOOLEAN,
      },
      auditoryType: {
        type: Sequelize.INTEGER,
        references: {
          model: 'AuditoryTypes',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false,
      },
      countOfPlaces: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Auditories');
  },
};