'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonTeacher extends Model {
    static associate({Lesson, Teacher}) {
      LessonTeacher.belongsTo(Lesson, {foreignKey: 'lessonId'});
      LessonTeacher.belongsTo(Teacher, {foreignKey: 'teacherId'});
    }
  }

  LessonTeacher.init({
    lessonId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'LessonTeacher',
  });
  return LessonTeacher;
};