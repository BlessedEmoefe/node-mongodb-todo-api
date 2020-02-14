// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("could not connect to mongodb server");
  }
  console.log("connected to mongodb server");

  const db = client.db("TodoApp");

  //using toArray
// db.collection('Todos').find({_id:new ObjectID('5e418a39995e6a1c74729082')}).toArray().then((doc)=>{
//   console.log('Todos')
//   console.log(JSON.stringify(doc ,undefined , 2))
// },(err)=>{
//   if(err){
//  return console.log('unable to fetch data',err)
//   }
// })

//using count instead of toArray
// db.collection('Todos').find().count().then((count)=>{
//   console.log(`Todos ${count}`)
// },(err)=>{
//   if(err){
//  return console.log('unable to fetch data',err)
//   }
// })


db.collection('Users').find({name:`Blessed Emoefe`}).toArray().then((doc)=>{

console.log(JSON.stringify(doc, undefined, 2))
},(err)=>{
  if(err)return console.log('unable to fetch Data',err)
})

  // client.close();
});
