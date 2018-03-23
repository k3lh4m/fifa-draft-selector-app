const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const _ = require('lodash');
const Joi = require('joi');
const startUpDebugger = require('debug')('app:startup');

const dbConnect = mongoose.connect('mongodb://localhost/fifa-draft-team');
dbConnect.then(() => { startUpDebugger('Connected to players db...') });

const playersSchema = new mongoose.Schema({
    _id: String,
    commonName: String,
    firstName: String,
    lastName: String,
    name: String,
    headshotImgUrl: String,
    nation: String,
    clubName: String,
    clubBadgeImgUrl: String,
    leagueName: String,
    position: String,
    id: String,
    isGK: Boolean,
    dateAdded: Date
});

const Players = mongoose.model('Players', playersSchema);

async function findPlayers(regex) {
    return await Players.find({
        commonName: {
            $regex: regex
        }
    });
}

router.get('/', (req, res) => {
    const _name = _.capitalize(req.query.name);
    const getPlayersByName = findPlayers(_name);

    getPlayersByName.then((data) => {
        res.send(data);
    });
});

module.exports = router;