const mongoose = require('mongoose');

const rankingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    score: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    }
});

const Ranking = mongoose.model('Ranking', rankingSchema);

module.exports = Ranking;