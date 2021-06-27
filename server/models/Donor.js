const mongoose = require('mongoose');

const Donor = mongoose.model('Donor', new mongoose.Schema({
    name: String,
    description: String,
    email: String,
    longitude: String,
    latitue: String
}))

module.exports = Donor;