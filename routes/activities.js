const router = require('express').Router();
let Activity = require('../models/activity.model');

router.route('/').get((req,res) => {
    Activity.find()
    .then(activities => res.json(activities))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    const type = req.body.type;
    const duration = req.body.duration;
    const date = req.body.date;

    const newActivity = new Activity({name,description,type,duration,date});

    newActivity.save()
    .then(() => res.json('Activity Added.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;