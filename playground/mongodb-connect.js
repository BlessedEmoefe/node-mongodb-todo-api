// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("could not connect to mongodb server");
  }
  console.log("connected to mongodb server");

  const db = client.db("TodoApp");
  // db.collection("Todos").insertOne(
  //   {
  //     text: "something to do",
  //     completed: false
  //   },
  //   (err, response) => {
  //     if (err) {
  //       return console.log("unable to insert todos", err);
  //     }
  //     console.log(JSON.stringify(response.ops, undefined, 2));
  //   }
  // );

  db.collection("Users").insertOne(
    {
      name: "Blessed Emoefe",
      age: "21",
      location: "jesse town"
    },
    (err, response) => {
      if (err) {
        return console.log("unable to insert user into database", err);
      }
      console.log(JSON.stringify(response.ops, undefined, 2));
    }
  );

  client.close();
});
