const express = require("express");

const { getAllUsers, getAssessments, updateRanking, getAllRanks, getAllTopics
} = require("../controllers/rankingControllers");

const getLoggedInUser = require("../middlewares/getLoggedInUser");

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/rankings', getAllRanks);
router.get('/topics', getAllTopics);

router.get('/', getLoggedInUser, getAssessments);
router.put('/', getLoggedInUser, updateRanking)

module.exports = router;