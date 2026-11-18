require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

// Routes
const tourRoutes = require('./routes/tourRoutes');
const authRoutes = require('./routes/authRoutes');

// Use Routes
app.use('/api', tourRoutes);
app.use('/api/auth', authRoutes);

// Start Server
const PORT = 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log('Database connection failed:', error.message);
    }
};

startServer();