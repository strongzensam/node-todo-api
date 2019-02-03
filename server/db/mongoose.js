let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://<SamSchwartz>:<fartjokes1!>@ds155293.mlab.com:55293/node-todo-api'
};

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( db.localhost || db.mlab)
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}
