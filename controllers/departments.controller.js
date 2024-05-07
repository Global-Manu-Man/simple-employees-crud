const db = require("../models");
const Department = db.departments;


//Create and save a new departament.
exports.create = (req, res) => {
   // validete request
   if (!req.body.name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
   }

   const departament = new Department({
      name: req.body.name,
      location: req.body.location,
      budget: parseFloat(req.body.budget), // Convertir a número
      manager: req.body.manager,
      employees: req.body.employees || [], // Define employees como un array de ObjectIds.
      published: req.body.published ? req.body.published : false // Establecer el campo "published" como false por defecto

   });

   departament
      .save(departament)
      .then(data => {
         res.send(data);
      })
      .catch(err => {
         res.status(500).send({
            message:
               err.message || "Some error occurred while creating the Departaments."
         });
      });
};

exports.findAll = (req, res)  => {
  const name = req.query.name;
  var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}}: {};

  Department.find(condition)
  .then(data => {
      res.send(data);
  })
  .catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving employeess."
      });
  });
}

// Find a single employees with an id
exports.findOne = (req, res) => {
   const id = req.params.id;

   Department.findById(id)
       .then(data => {
           if (!data)
               res.status(404).send({ message: "Departament not found with id " + id });
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

// Delete a departaments with the specified id in the request
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

exports.deleteAll = (req, res) => {
   Department.deleteMany({})
     .then(data => {
       res.send({
         message: `${data.deletedCount} Tutorial were deleted successfully!`
       });
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while removing all tutorial."
       });
     });
 };

 exports.findAllPublished = (req, res) => {
   Department.find({ published: true })
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving tutorial."
       });
     });
 };