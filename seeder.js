const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Ranking = require('./models/Ranking');
const User = require("./models/User");
const Topic = require('./models/Topic');


async function seedDB() {

    await User.deleteMany({});
    await Ranking.deleteMany({});
    await Topic.deleteMany({});

    let user1 = new User({
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1'
    });

    let user2 = new User({
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2'
    });

    user1 = await user1.save();
    user2 = await user2.save();

    let topic1 = new Topic({
        name: 'Topic 1',
        description: 'Description of Topic 1'
    });

    let topic2 = new Topic({
        name: 'Topic 2',
        description: 'Description of Topic 2'
    });

    topic1 = await topic1.save();
    topic2 = await topic2.save();

    const ranking1 = new Ranking({
        user: user1._id,
        topic: topic1._id,
        score: 90
    });

    const ranking2 = new Ranking({
        user: user1._id,
        topic: topic2._id,
        score: 80
    });

    const ranking3 = new Ranking({
        user: user2._id,
        topic: topic1._id,
        score: 70
    });

    const ranking4 = new Ranking({
        user: user2._id,
        topic: topic2._id,
        score: 60
    });

    // save rankings to the database
    await ranking1.save();
    await ranking2.save();
    await ranking3.save();
    await ranking4.save();
}

module.exports = seedDB;
