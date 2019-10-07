const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/modTracker', { useNewUrlParser: true }, () => {  // connecting to specific database
    console.log("We're connected to mongoose!");
});

module.exports = mongoose