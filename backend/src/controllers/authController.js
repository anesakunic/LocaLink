// Import your User model and any necessary packages for authentication (e.g., bcrypt, jsonwebtoken)
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controller function for user sign up
const signUp = async (req, res) => {
    // Extract user information from request body
    const { username, email, password } = req.body;

    try {
        // Check if user with the same email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
};

// Controller function for user sign in
const signIn = async (req, res) => {
    // Extract user credentials from request body
    const { email, password } = req.body;

    try {
        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

        // Respond with token
        res.status(200).json({ token });
    } catch (err) {
        // Handle errors
        res.status(500).json({ message: err.message });
    }
};

module.exports = { signUp, signIn };
