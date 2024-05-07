const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.employees   = require("./employees.model.js")(mongoose);
db.departments = require("./departments.model.js")(mongoose);


// Configuración de mongoose.set()
mongoose.set(dbConfig.mongooseOptions);

module.exports = db;