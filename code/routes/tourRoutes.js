const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const tourController = require('../controller/tourController');

// GET all tours
router.get('/tours', authMiddleware, tourController.getAllTours);

// GET tours by search query
router.get('/tours/search', tourController.getToursByQuery);

// GET tour by ID
router.get('/tours/:id', authMiddleware, tourController.getTourById);

// CREATE tour
router.post('/tours', authMiddleware, tourController.saveTours);

// UPDATE tour
router.put('/tours/:id', authMiddleware, tourController.updateTour);

// DELETE tour
router.delete('/tours/:id', authMiddleware, tourController.deleteTourbyID);



module.exports = router; 

// 🔍 Add this temporary check:
console.log('DEBUG CHECK:');
console.log('authMiddleware is a:', typeof authMiddleware);
console.log('tourController.getAllTours is a:', typeof tourController.getAllTours);

// GET all tours
router.get('/tours', authMiddleware, tourController.getAllTours);