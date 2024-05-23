// Import your Report model
const Report = require('../models/Report');
const User = require('../models/User');

// Controller function to fetch all reports
const getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Controller function to create a new report
const createReport = async (req, res) => {
    const report = new Report({
        title: req.body.title,
        location: req.body.location,
        date: req.body.date,
        description: req.body.description,
        user: req.user // Assuming you have user authentication and pass user info in req.user
    });

    try {
        const newReport = await report.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getReports, createReport };
