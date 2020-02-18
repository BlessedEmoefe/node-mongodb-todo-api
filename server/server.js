let mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// let Todo = mongoose.model("Todo", {
//   text: {
//     type: String,
//     required:true,
//     trim:true,
//     minlength:1
//   },
//   completed: {
//     type: Boolean,
//     default:false
//   },
//   completedAt: {
//     type: Number,
//     default:null
//   },

// });

// let newTodo = new Todo({
//   text: "cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("saved todo", doc);
//   },
//   err => {
//     console.log("unable to save todo");
//   }
// );

// assignment creating another document in todo collection
// let Todo = mongoose.model("Todo", {
//   text: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   },
//   completedAt: {
//     type: Number
//   }
// });

// const newTodo = new Todo({
//   text: "I just did the assignment",
//   completed: true,
//   completedAt: 123
// });
// newTodo.save().then(
//   doc => {
//     return console.log(`todo saved : ${doc}`);
//   },
//   error => console.log("Unable to save newTodo", error)
// );

let User = mongoose.model("User", {
  email: {
    minlength: 1,
    required: true,
    trim: true,
    type: String
  }
});

const newUser = new User({
  email: "blessed"
});

newUser.save().then(
  doc => {
    console.log(JSON.stringify(doc, undefined, 2));
  },
  err => console.log("unable to create user", err)
);
