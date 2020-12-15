const scheduleRouter = require('express').Router();
const controller = require('../controllers/scheduleController');

scheduleRouter.get('/auditoryTypes', controller.getAuditoryTypes);

module.exports = scheduleRouter;