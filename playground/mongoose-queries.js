const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ad79fb835917309b33b2399';
var uid = '5ad3f333f417677f4e5e7ffbb';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
}

if(!ObjectID.isValid(uid)){
    console.log('UID not valid');
}


// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos',todos)
// },(err) =>{
//     console.log('Error',err);
// });

// Todo.find({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo',todo)
// },(err) =>{
//     console.log('Error',err);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log("Id Not found");
//     }
//     console.log('Todo by ID',todo)
// }).catch((err) =>console.log('Error',err));

User.findById(uid).then((user)=>{
    if(!user){
        return console.log('UserID not found')
    }
    console.log('User : ',user);
}).catch((err)=> console.log('Error',err));