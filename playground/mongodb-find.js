// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  if(err)
  {
    return console.log("Unable to connect mongodb server....");
  }
  console.log("Connect to mongodb server...");
const db = client.db('TodoApp');

//Delete many data at once
// db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => { 
//   console.log(result);
// });

//Delete only first data that is found
// db.collection('Todos').deleteOne({text:'Something to do 1' }).then((result) => {
//   console.log(result);
// });

//finds one and deletes it

db.collection('Todos').findOneAndDelete({text: 'Something to do 2'}).then((result)=>{
console.log(result);
});

//   db.collection('Todos').find({
//       _id:new ObjectID('5a1bbcacf6b5600ebc505ec4')
//         }).toArray().then((docs)=>{
//         console.log("Todos");
//         console.log(JSON.stringify(docs,undefined,2));
//   },(err)=>{
//       console.log("Unable to fetch todos",err);
//   });


// db.collection('Todos').find().count().then((count)=>{
//       console.log("Todos");
//       console.log(`Todos : ${count}`);
// },(err)=>{
//     console.log("Unable to fetch todos",err);
// });

db.collection('Users').find({name:"Savan Patel"}).count().then((count)=>{
    console.log("Users");
    console.log(`Users : ${count}`);
},(err)=>{
  console.log("Unable to fetch todos",err);
});

//   db.close();
});
