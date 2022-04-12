const mongoose = require('mongoose');
const { Schema } = mongoose;

const ScheduleSchema = new Schema({
    startTime: {
        type: String,
        required: true,
        unique: true
    },
    endTime: {
        type: String,
        required: true,
        unique: true
    },
    monday: {
        type: String,
        required: true
    },
    tuesday: {
        type: String,
        required: true
    },
    wednesday: {
        type: String,
        required: true
    },
    thursday: {
        type: String,
        required: true
    },
    friday: {
        type: String,
        required: true
    },
    saturday: {
        type: String,
        required: true
    },
    sunday: {
        type: String,
        required: true
    }
});

const Schedule = mongoose.model('Schedule', ScheduleSchema)

module.exports = Schedule;
