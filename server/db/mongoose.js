// let db = {
//   localhost: 'mongodb://localhost:27017/TodoApp',
//   mlab: 'mongodb://<SamSchwartz>:<fartjokes1!>@ds155293.mlab.com:55293/node-todo-api'
// };

const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://<SamSchwartz>:<fartjokes1!>@ds155293.mlab.com:55293/node-todo-api'
};

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



// mongoose.Promise = global.Promise;
// // mongoose.connect( process.env.PORT ? db.mlab : db.localhost);
//
// console.log("HEYO BRO", process.env.MONGODB_URI);
// // mongoose.connect( db.localhost || db.mlab)
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}
