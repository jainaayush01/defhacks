const express = require('express');
const donor = require('./donor')

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', donor);
}