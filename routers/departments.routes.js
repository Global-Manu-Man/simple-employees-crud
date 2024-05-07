module.exports = app => {
  const departament = require("../controllers/departments.controller");

  var router = require("express").Router();

  //Create a new Departament
  router.post("/", departament.create);

  //Retrieve all published Departament
  router.get("/", departament.findAll);

  //Retrieve all published Departament
  router.get("/employees", departament.findAllPublished);

  //Retrieve a single Departament with id
  router.get("/:id", departament.findOne)

  //Retrieve a Departament with id
  router.put("/:id", departament.update);

  //Retrieve a Departament with id
  router.delete("/:id", departament.delete);

  //Delete a new Departament
  router.delete("/", departament.deleteAll);

  app.use("/v1/api/departament", router);
}