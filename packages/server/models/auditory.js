'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auditory extends Model {

    static associate({Department, AuditoryType, Lesson, LessonAuditory}) {
      Auditory.belongsTo(Department, {foreignKey: 'departmentId'});

      Auditory.belongsTo(AuditoryType, {foreignKey: 'auditoryType'});
      Auditory.belongsToMany(Lesson,
          {through: LessonAuditory, foreignKey: 'auditoryId'});
      Auditory.hasMany(LessonAuditory, {foreignKey: 'auditoryId'});
    }
  }

  Auditory.init({
    departmentId: DataTypes.INTEGER,
    auditoryName: DataTypes.STRING,
    notUsed: DataTypes.BOOLEAN,
    auditoryType: DataTypes.INTEGER,
    countOfPlaces: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Auditory',
  });
  return Auditory;
};