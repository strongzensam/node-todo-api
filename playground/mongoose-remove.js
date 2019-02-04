const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})
Todo.findByIdAndRemove('5c589a6f19bb0fff0b0e5b52').then((todo) => {
  console.log(todo);
});
