const packages = require("../data/tour");
const tourModel = require("../models/tourModel");

// get all tours
const getAllTours = (req, res) => {

    const tours = tourModel.getAll();
    res.json(tours);

};

// get tour by id
const getTourById = (req, res) => {

    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    res.json(tour);

};

// add new tour
const addTour = (req, res) => {

    const newTour = req.body;

    const tour = tourModel.addTour(newTour);

    res.status(201).json(tour);

};

const deleteTour = (req, res) => {
    const result = tourModel.deleteTour(req.params.id);
    if (!result) {
        return res.status(404).json({ message: "Tour not found" });
    }
    res.json({ message: "Tour deleted" });
};

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    deleteTour

}; 