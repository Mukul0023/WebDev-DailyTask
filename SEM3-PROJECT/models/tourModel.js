const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname, "../data/tour.json");

// get all
const getAll = () => {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
};

// get by id
const getById = (id) => {
    const tours = getAll();
    return tours.find((tour) => tour.id === id);
};

// add new tour
const addTour = (newTour) => {
    const tours = getAll();
    tours.push(newTour);
    fs.writeFileSync(filepath, JSON.stringify(tours));
    return newTour;
};
// delete tour
const deleteTour = (id) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id == id);
    if (index === -1) return null;
    tours.splice(index, 1);
    fs.writeFileSync(filepath, JSON.stringify(tours));
    return true;
};

module.exports = {
    getAll,
    getById,
    addTour,
    deleteTour

}; 