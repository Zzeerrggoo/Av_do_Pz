'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate({Department, LessonGroup, Lesson}) {
      Group.belongsTo(Department, {foreignKey: 'departmentId'});
      Group.belongsToMany(Lesson,
          {through: LessonGroup, foreignKey: 'groupId'});
      Group.hasMany(LessonGroup, {foreignKey: 'groupId'});
    }
  }

  Group.init({
    departmentId: DataTypes.INTEGER,
    groupCode: DataTypes.STRING,
    fullName: DataTypes.STRING,
    courseNumber: DataTypes.INTEGER,
    countOfStudents: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};