const express = require("express");

const router = express.Router();

const tourController = require("../controller/tourController");

// get all tours
router.get("/tours", tourController.getAllTours);

// get tour by id
router.get("/tours/:id", tourController.getTourById);

// add new tour
router.post("/tours", tourController.addTour);

// delete tour
router.delete("/tours/:id", tourController.deleteTour);

module.exports = router; 