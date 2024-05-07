module.exports = app =>{
    const employees = require("../controllers/employees.controller");


var router = require("express").Router();

//Create a new Employees
router.post("/", employees.create);

//Retrieve all Employees tutorial
router.get("/", employees.findAll);

//Retrieve all Employees
router.get("/employees", employees.findAllPublished);

//Retrieve a single Employees with id
router.get("/:id", employees.findOne)

//Retrieve a Employees with id
router.put("/:id", employees.update);

//Retrieve a Employees with id
router.delete("/:id", employees.delete);

//Delete a new Employees
router.delete("/", employees.deleteAll);

app.use("/v1/api/employees", router);

}