'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LessonGroup extends Model {
    static associate({Lesson, Group}) {
      LessonGroup.belongsTo(Lesson, {foreignKey: 'lessonId'});
      LessonGroup.belongsTo(Group, {foreignKey: 'groupId'});
    }
  }

  LessonGroup.init({
    lessonId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'LessonGroup',
  });
  return LessonGroup;
};