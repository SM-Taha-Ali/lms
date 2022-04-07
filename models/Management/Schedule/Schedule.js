const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScheduleSchema = new Schema({
    period: {
        type: String,
        required: true,
        unique: true
    },
    mon: {
        type: String,
        required: true
    },
    tue: {
        type: String,
        required: true
    },
    wed: {
        type: String,
        required: true
    },
    thur: {
        type: String,
        required: true
    },
    fri: {
        type: String,
        required: true
    },
    sat: {
        type: String,
        required: true
    },
    sun: {
        type: String,
        required: true
    }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule;
