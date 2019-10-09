const mongoose = require('mongoose')

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/modTracker', { useNewUrlParser: true }, () => {  // connecting to specific database
    console.log("We're connected to mongoose!");
});

// let mongoURI = "";  // for deployment

// if (process.env.NODE_ENV === "production") {
//     mongoURI = process.env.DB_URL;
//   } else {
//     mongoURI = "mongodb://localhost/modTracker";
// }

// // connect to the database, with the imported mongoose instance
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true })
//   .then(instance =>
//     console.log(`Connected to db: ${instance.connections[0].name}`)
//   )
//   .catch(error => console.log("Connection failed!", error));



module.exports = mongoose