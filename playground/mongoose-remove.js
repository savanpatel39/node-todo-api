const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Removes all records
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Finds only one by id and remoces it
Todo.findByIdAndRemove('5ad7c9602c88a012086c8b79').then((todo) => {
    console.log(todo);
});