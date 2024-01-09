const vehicles = require('../data/comments');

const vehiclesController = {
    list: (req , res) => {
        res.json(vehicles);
    },
    show: (req, res) => {
        const vehicle = vehicles.find(vehicle => vehicle._id == req.params.id);
        res.status(200).json(vehicle);
    },
    create: (req, res) => {
        const newVehicle = {
            ...req.body,
            _id: vehicles.length + 1
        };
    
        vehicles.push(newVehicle);
        res.json(newVehicle);
    },
}

module.exports = vehiclesController; 