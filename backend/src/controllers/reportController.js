// reportController.js
const Report = require('../models/Report');

const createReport = async (req, res) => {
    const { title, date, description } = req.body;

    const report = new Report({
        title,
        date,
        description
    });

    try {
        const newReport = await report.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { createReport, getReports };
