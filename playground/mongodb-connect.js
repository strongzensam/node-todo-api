// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Sam",
  //   age: 31,
  //   location: "Vallejo, CA"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert User", err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

//Insertnew doc into users (name, age, location)
  db.close();
});
