const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mySuperSecretKey123';

const authMiddleware = async (req, res, next) => {
    // ✅ Fixed: use bracket notation or req.get() instead of calling req.headers as a function
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    const token = authHeader && authHeader.replace("Bearer", "").trim();

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};

// ✅ Crucial: Export the function directly so Express recognizes it as a valid handler
module.exports = authMiddleware;

