const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/modTracker', { useNewUrlParser: true }, () => {  // connecting to specific database
    console.log("We're connected to mongoose!");
});

mongoose.Promise = Promise

module.exports = mongoose