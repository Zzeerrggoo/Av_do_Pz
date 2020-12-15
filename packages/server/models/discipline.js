'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate({Lesson}) {
      Discipline.hasMany(Lesson, {foreignKey: 'disciplineId'});
    }
  }

  Discipline.init({
    fullName: DataTypes.STRING,
    shortName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Discipline',
  });
  return Discipline;
};