// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

// db.collection('Todos').find({
//   _id: new ObjectID("5c3e8c9fb512014fd18feca4")
// }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log("Unable to fetch todos");
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log("Unable to fetch todos");
// });
db.collection('Users').find({name: 'Didi'}).toArray().then((flop) => {
  console.log('Todos');
  console.log(JSON.stringify(flop, undefined, 2));
}, (err) => {
  console.log("Unable to fetch users");
});
  // db.close();
});
