const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { ObjectID } = require("mongodb");
const { User } = require("../server/models/user");

// let id = "6e4fde8ac3e30152d490f8651";
// if (!ObjectID.isValid(id)) {
//   console.log("this id is invalid");
// }
// Todo.find({ _id: id }).then(todos => {
//   return console.log(todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   return console.log(todo);
// });
// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("there is not todo with the id");
//     }
//     return console.log(todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

//assignment  user
let id = "5e4bd7def90b61571c00eeec1";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("there is no user with the id");
    }
    return console.log("user", JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e));
