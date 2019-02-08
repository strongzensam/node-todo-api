const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

if (process.env.NODE_ENV) {

  console.log("in test");
  var db = {
    localhost: 'mongodb://localhost:27017/TodoAppTest',
    mlab: 'mongodb://SamSchwartz:fartjokes1!@ds155293.mlab.com:55293/node-todo-api'
  };
} else {

  console.log("in regular");
  var db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://SamSchwartz:fartjokes1!@ds155293.mlab.com:55293/node-todo-api'
  };
}

mongoose.connect(db.localhost,
    {
        useMongoClient: true
    }
).then(
    () => {},
    err =>
    {
        mongoose.connect(db.mlab,
            {
                useMongoClient: true
            }
        );
    }
);

module.exports = {mongoose}
