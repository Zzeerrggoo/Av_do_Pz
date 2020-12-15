'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Discipline, {foreignKey: 'disciplineId'});
      Lesson.belongsTo(models.Department, {foreignKey: 'departmentId'});

      Lesson.hasMany(models.LessonTime, {foreignKey: 'lessonId'});
      Lesson.belongsToMany(models.Teacher,
          {through: models.LessonTeacher, foreignKey: 'lessonId'});
      Lesson.hasMany(models.LessonTeacher);

      Lesson.belongsToMany(models.Auditory,
          {through: models.LessonAuditory, foreignKey: 'lessonId'});
      Lesson.hasMany(models.LessonAuditory, {foreignKey: 'lessonId'});

      Lesson.belongsToMany(models.Group,
          {through: models.LessonGroup, foreignKey: 'lessonId'});
      Lesson.hasMany(models.LessonGroup, {foreignKey: 'lessonId'});

    }
  }

  Lesson.init({
    disciplineId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    countOfHours: DataTypes.INTEGER,
    control: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Lesson',
  });
  return Lesson;
};