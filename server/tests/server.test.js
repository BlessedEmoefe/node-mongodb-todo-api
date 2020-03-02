const expect = require("expect");
const request = require("supertest");
const { app } = require("./../server");
const { Todo } = require("../models/todo");
const { user } = require("../models/user");
const { ObjectID } = require("mongodb");

const todos = [
  {
    _id: new ObjectID(),
    text: "first todo text"
  },
  {
    _id: new ObjectID(),
    text: "second todo text"
  }
];

beforeEach(done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
    })
    .then(() => done());
});

describe("POST /todos", () => {
  it("should create a todo", done => {
    let text = "text for testing todos";

    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find({ text })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(e => {
            done(e);
          });
      });
  });

  it("should not create a new todo", done => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)

      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(2);
            done();
          })
          .catch(err => done(err));
      });
  });
});

describe("GET /todos", () => {
  it("should get all the todos in database", done => {
    request(app)
      .get("/todos")
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe("GET /todos/:id", () => {
  it("should return todo docs", done => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect(res => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it("should return a 404 if todo not found", done => {
    let newId = new ObjectID().toHexString();
    request(app)
      .get(`/todos/${todos.newId}`)
      .expect(404)
      .end(done);
  });

  it("should return a 404 for non Object id", done => {
    request(app)
      .get("/todos/123")
      .expect(404)
      .end(done);
  });
});
