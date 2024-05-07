module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        lastname: String,
        age: String,
        position: String,
        department_id: String,
        salary: String,
        email: String,
        phone: String,
        published: Boolean  // Nuevo campo "created" con valor predeterminado de true.
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Employees = mongoose.model("employees", schema);
    return Employees;
  };