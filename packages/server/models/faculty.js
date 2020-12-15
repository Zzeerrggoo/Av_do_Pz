'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    static associate({Department}) {
      Faculty.hasMany(Department, {foreignKey: 'facultyId'});
    }
  }
  Faculty.init({
    facultyCode: DataTypes.STRING,
    fullName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Faculty',
  });
  return Faculty;
};