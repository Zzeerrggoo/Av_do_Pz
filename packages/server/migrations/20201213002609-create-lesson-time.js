'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('LessonTimes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Lessons',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      typeOfWeek: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      dayOfWeek: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('LessonTimes');
  },
};