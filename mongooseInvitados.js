require("dotenv").config()

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(db => console.log('DB MONGODB is connected'))
    .catch(err => console.log(err));


module.exports = mongoose;