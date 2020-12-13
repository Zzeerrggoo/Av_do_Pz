'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lessons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      disciplineId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Disciplines',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Departments',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      countOfHours: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      control: {
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
    await queryInterface.dropTable('Lessons');
  },
};