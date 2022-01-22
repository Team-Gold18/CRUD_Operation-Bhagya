const mongoose = require('mongoose')
//to get access to mongoose

//create a schema
const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

//to export alien schema
module.exports = mongoose.model('Alien',alienSchema)