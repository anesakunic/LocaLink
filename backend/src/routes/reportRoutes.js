const express = require('express');
const router = express.Router();

// Import your controllers
const { getReports, createReport } = require('../controllers/reportController');

// Define routes
router.get('/reports', getReports);
router.post('/reports', createReport);

module.exports = router;
