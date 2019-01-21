// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

//findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c4516d819bb0fff0b0aa3e2')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// })
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c3e8e6eb33a79500e3f36c0')
}, {
  $set: {name: "Sam", address: "128 Maurer Way"},
  $inc: {age: 1},

}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
})

  // db.close();
});
