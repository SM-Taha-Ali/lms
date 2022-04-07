const mongoose = require('mongoose');
const { Schema } = mongoose;

const BatchSchema = new Schema({
    subteafees: {
        type: Array,
        required: true
    },
    students: {
        type: Array
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    subgroup: {
        type: String,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
});

const Batch = mongoose.model('Batch', BatchSchema)

module.exports = Batch;
