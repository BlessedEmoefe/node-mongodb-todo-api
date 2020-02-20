const expect = require("expect");
const request = require("supertest");
const { app } = require("./../server");
const { Todo } = require("../models/todo");
const { user } = require("../models/user");

beforeEach(done => {
  Todo.remove({}).then(() => done());
});

describe("POST /todos", () => {
  it("should create a todo", done => {
    const text = "text for testing todos";

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
        Todo.find()
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
            expect(todos.length).toBe(0);
            done();
          })
          .catch(err => done(err));
      });
  });
});
