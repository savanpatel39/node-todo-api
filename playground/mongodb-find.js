// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err)
  {
    return console.log("Unable to connect mongodb server....");
  }
  console.log("Connect to mongodb server...");

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
