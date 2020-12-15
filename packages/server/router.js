const router = require('express').Router();
const scheduleRouter = require('./routes/scheduleRouter');

router.use('/schedule', scheduleRouter);

module.exports = router;