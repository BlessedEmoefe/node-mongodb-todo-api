// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("could not connect to mongodb server");
  }
  console.log("connected to mongodb server");

  const db = client.db("TodoApp");

// findOneAndUpdate
//  db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5e45fc5c71c2b22124826897')},
//  {
//     $set:{
//       completed:false
//     },
//  },
// {returnOriginal:false}
// ).then((result)=>{
// console.log(result)
//  })

// assignment
db.collection('Users').findOneAndUpdate({_id:new ObjectID('5e46019fecba1d501c1e4d28')},{$set:{name:'Blessed'},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
  console.log(result)
})



  // client.close();
});
