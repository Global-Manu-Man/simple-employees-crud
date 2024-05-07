module.exports = mongoose =>{

var schema = mongoose.Schema(
    {
        name: String,
        location: String,
        budget: Number,
        manager: String,
        employees: [String], // Define employees como un array de cadenas
        published: Boolean // Nuevo campo "created" con valor predeterminado de ttue.
    },
    { timestamps: true}
);

schema.method("toJSON", function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Departament = mongoose.model("departament", schema);
return Departament;
};

