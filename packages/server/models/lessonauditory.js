'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonAuditory extends Model {
    static associate({Lesson, Auditory}) {
      LessonAuditory.belongsTo(Lesson, {foreignKey: 'lessonId'});
      LessonAuditory.belongsTo(Auditory, {foreignKey: 'auditoryId'});
    }
  }

  LessonAuditory.init({
    lessonId: DataTypes.INTEGER,
    auditoryId: DataTypes.INTEGER,
    selected: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'LessonAuditory',
  });
  return LessonAuditory;
};