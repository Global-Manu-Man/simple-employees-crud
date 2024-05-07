const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

//app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


const db = require("../models");


db.mongoose
    .connect(db.url, {
        //useNewUrlParser: true
        //useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Emmanuel Sandoval application." });
});


require("../routers/employees.routes")(app);
require("../routers/departments.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});