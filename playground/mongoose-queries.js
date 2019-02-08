const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c462287fc64021752ba3f46';

User.findById(id).then((user) => {
  if(!user) {
    return console.log("ID not found");
  }
  console.log("User by ID", user);
}).catch((e) => console.log(e));
