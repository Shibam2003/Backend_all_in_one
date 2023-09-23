const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to MongoDb successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//creating a schema for fields as you want
const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

//creating a model of the above schema
const Student = new mongoose.model("Student", student); //first is name of the model and second is the schema name

// const adder = async () => {
//   const ss = new Student({
//     name: "Shibam",
//     workout: true,
//     height: 6,
//   });
//   await ss.save(); //fulfill or rejected
// };

//instead of this you can also write like this

// const adder = async () => {
//   const ss = await Student.create({ name: "SHIBAM", workout: true, height: 6 });
//   console.log(ss);
// };

const adder = async () => {
  const ss = await Student.find({ height: { $eq: 6 } }); //here $eq is an operator (note: operator starts with $)
  console.log(ss);
};

adder(); //calling the function
