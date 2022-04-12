const express = require('express');
const router = express.Router();

const ScheduleController = require('../../controllers/management/schedule/schedule');
// const ScheduleController = require('.../../../controllers/management/Schedule/Schedule.js');
// const ScheduleController = require('...');
// D:\TPA2\lms\controllers\management\Schedule\Schedule.js


router.post(
    '/add-Schedule',
    ScheduleController.addSchedule
)

router.get(
    '/get-Schedule',
    ScheduleController.getSchedule
)

router.put(
    '/update-Schedule/:id',
    ScheduleController.updateSchedule
)

// router.delete(
//     '/delete-Schedule',
//     ScheduleController.deleteSchedule
// )

module.exports = router