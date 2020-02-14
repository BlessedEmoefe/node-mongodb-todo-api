// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("could not connect to mongodb server");
  }
  console.log("connected to mongodb server");

  const db = client.db("TodoApp");


  //Using deleteMany
// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
//   console.log(result)
// })

//using deleteOne
// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
//   console.log(result)
// })

//using findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result)
// })


// assignment
// db.collection('Users').deleteMany({name:'Blessed Emoefe'}).then((result)=>{
// console.log(result.result.n)
// })



db.collection('Users').findOneAndDelete({_id:new ObjectID('5e45f347a2c6b73bd2174037')}).then((result)=>{

  console.log(result)
})
  // client.close();
});
