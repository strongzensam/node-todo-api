// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// })
//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// })
//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result.value);
// })
// db.collection('Users').deleteMany({name: "Sam"}).then((result) =>{
//   console.log(result);
// })
db.collection('Users').deleteOne({_id: ObjectID('5c3e8ed8d1d006501ea32747')}).then((result) =>{
  console.log(result);
})
  // db.close();
});
