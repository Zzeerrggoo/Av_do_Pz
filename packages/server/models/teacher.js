'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {

    static associate({Department, LessonTeacher, Lesson}) {
      Teacher.belongsTo(Department, {foreignKey: 'departmentId'});
      Teacher.belongsTo(Lesson,
          {through: LessonTeacher, foreignKey: 'teacherId'});
      Teacher.hasMany(LessonTeacher);
    }
  }

  Teacher.init({
    departmentId: DataTypes.INTEGER,
    fullName: DataTypes.STRING,
    sex: DataTypes.BOOLEAN,
    post: DataTypes.STRING,
    status: DataTypes.STRING,
    isNotWorking: DataTypes.BOOLEAN,
    favouriteDays: DataTypes.STRING,
    favouriteTime: DataTypes.STRING,
    priority: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Teacher',
  });
  return Teacher;
};