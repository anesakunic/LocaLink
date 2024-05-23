// reportRoutes.js
const express = require('express');
const router = express.Router();
const { createReport, getReports } = require('../controllers/reportController');

// Route for creating a report
router.post('/create', createReport);

// Route for fetching all reports
router.get('/', getReports);

module.exports = router;
