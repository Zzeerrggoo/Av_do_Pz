'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonTime extends Model {
    static associate({Lesson}) {
      LessonTime.belongsTo(Lesson, {foreignKey: 'lessonId'});
    }
  }

  LessonTime.init({
    lessonId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    typeOfWeek: DataTypes.BOOLEAN,
    dayOfWeek: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'LessonTime',
  });
  return LessonTime;
};