const db = require("../models");
const Employees = db.employees;

// Create and save a new employees
exports.create = (req, res) => {

    if (!req.body.name || !req.body.salary || isNaN(req.body.salary)) {
        res.status(400).send({ message: "Name and salary must be provided and salary must be a number!" });
        return;
    }
    const employees = new Employees({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        position: req.body.position,
        department_id: req.body.department_id,
        salary: req.body.salary,
        email: req.body.email,
        phone: req.body.phone,
        published: req.body.published ? req.body.published : false // Establecer el campo "published" como false por defecto
    });

    employees
        .save(employees)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the employeess."
            });
        });
};

// Retrieve all employees from the database
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}}: {};
    
    Employees.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving employeess."
            });
        });
};

// Find a single employees with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Employees.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "employees not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res.status(500)
            .send({ message: "Error retrieving employeess with id=" + id });
        });
};

// Update a employeess by the id in the request
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Data to  update can not be empty"
    });
    }


    const id = req.params.id;

    Employees.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update employees with id=${id}. Maybe employees was not found!`
                });
            } else res.send({ message: "employees was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating employees with id=" + id
            });
        });
};

// Delete a employeess with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Employees.findByIdAndRemove(id, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete employees with id=${id}. Maybe employees was not found!`
                });
            } else {
                res.send({
                    message: "employees was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete employees with id=" + id
            });
        });
};

// Delete all employeess from the database
exports.deleteAll = (req, res) => {
    Employees.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} employeess were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all employees."
            });
        });
};

// Find all published employees
exports.findAllPublished = (req, res) => {
    Employees.find({ published: true })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving employees."
            });
        });
};
