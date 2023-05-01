const jwt = require('jsonwebtoken');
const Ranking = require('../models/Ranking');
const User = require("../models/User");
const Topic = require("../models/Topic");

const JWT_SECRET = process.env.JWT_SECRET;

getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

getAllRanks = async (req, res) => {
    try {
        const ranks = await Ranking.find();
        res.status(200).send({ ranks });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.status(200).send({ topics });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}

/*
You need to implement a controller to retrieve assessments for a user from the database, sort them based on their scores, and send the sorted assessments as a response.

Sample Input:
User ID: '12345'
Rankings in the database:
{ user: '12345', topic: { name: 'Math' }, score: 80 }
{ user: '12345', topic: { name: 'Science' }, score: 95 }
{ user: '12345', topic: { name: 'History' }, score: 70 }

Sample Output (Response):
{
  "assessments": {
    "History": 70,
    "Math": 80,
    "Science": 95
  }
}
In this example, the controller fetches the rankings for the user with ID '12345' and sorts them based on the scores in ascending order. The resulting assessments object is then sent as a response, where each key represents the topic name and its corresponding value is the assessment score.
*/

getAssessments = async (req, res) => {
    try {
        // Write Your Code Here
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
};

updateRanking = async (req, res) => {
    const { topic, score } = req.body;

    try {
        const ranking = await Ranking.findOne({ user: req.user.userId, topic });

        if (!ranking) {
            const newRanking = new Ranking({
                user: req.user._id,
                topic,
                score
            });

            await newRanking.save();
        } else {
            ranking.score = score;
            await ranking.save();
        }

        res.status(200).send({ message: 'Ranking updated successfully' });
    } catch (error) {
        console.log(error);

        if (error.name === 'ValidationError') {
            return res.status(400).send({ error: error.message });
        }

        res.status(500).send({ error: 'Internal Server Error' });
    }
};

module.exports = { getAllUsers, getAssessments, updateRanking, getAllRanks, getAllTopics }