
const User = require('../model/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET || 'mySuperSecretKey123';
const JWT_EXPIRES_IN = '1h';

// Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );
};

// Register User
const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check existing user
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        // Hash password with salt (10 rounds)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        // Generate JWT Token
        const token = generateToken(user._id);

        res.status(201).json({
            message: 'User registered successfully',
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Login User
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        // Compare password using bcrypt
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        // Generate JWT Token
        const token = generateToken(user._id);

        res.status(200).json({
            message: 'Login successful',
            token: token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {register,login,generateToken};
