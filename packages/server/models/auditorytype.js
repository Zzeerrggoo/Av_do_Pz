'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuditoryType extends Model {
    static associate({Auditory}) {
      AuditoryType.hasMany(Auditory, {foreignKey: 'auditoryType'});
    }
  }

  AuditoryType.init({
    typeName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'AuditoryType',
  });
  return AuditoryType;
};