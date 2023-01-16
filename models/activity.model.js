const mongoose = require('mongoose');

const Schema = mongoose.schema;

const activitySchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    duration: {type: String, required: true},
    date: {type: String, required: true},

}, {
    timestamps: true,
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;