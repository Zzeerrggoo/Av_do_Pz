const {AuditoryType} = require('../models');

module.exports.getAuditoryTypes = async (req, res, next) => {

  try {

    const data = await AuditoryType.findAll(
        {attributes: ['typeName'], raw: true});

    res.status(200).send({data});

  } catch (error) {
    next(error);
  }
};