let express = require("express");
let bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
let { User } = require("./models/user");
let { Todo } = require("./models/todo");

let app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = { app };
