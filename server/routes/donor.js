const express = require('express');
const router = express.Router();
const Donor = require('../models/Donor');

router.get('/donor', async (req, res) => {
    try {
        let donors = await Donor.find({});
        res.json(donors);
    }
    catch (error) {
        res.json({ error });
        console.log(error);
    }
})

router.post('/donor', async (req, res) => {
    try {
        const { name, description, email, longitude, latitude } = req.body;
        if (!name || !description || !email) {
            res.status(400).json({
                error: 'Required fields missing'
            })
        }
        else {
            let donor = new Donor({ email, description, email, longitude, latitude });
            await donor.save();
    
            res.json({
                message: 'user saved',
                donor
            })
        }
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;