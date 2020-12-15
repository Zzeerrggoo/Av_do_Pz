'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate({Faculty, Teacher, Auditory, Group, Lesson}) {
      Department.belongsTo(Faculty, {foreignKey: 'facultyId'});
      Department.hasMany(Teacher, {foreignKey: 'departmentId'});
      Department.hasMany(Auditory, {foreignKey: 'departmentId'});
      Department.hasMany(Group, {foreignKey: 'departmentId'});
      Department.hasMany(Lesson, {foreignKey: 'departmentId'});
    }
  }

  Department.init({
    facultyId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    shortName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};