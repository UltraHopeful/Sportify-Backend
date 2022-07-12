//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
const express = require('express');
const {v4: uuidv4} = require('uuid');
const Facilities = require('../models/facilities');
const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const allFacilities = await Facilities.find();
        return res.status(200).json({
            data: allFacilities,
            success: true
        });
    }
    catch (err) {
        return res.status(500).json({
            message:"Internal server error",
            success:false
        });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({
            message: "Id is required!",
            success: false,
        });
    }
    try {
        const facility = await Facilities.find({"id": id});
        if (!facility || facility.length == 0) {
            return res.status(404).send({
                message: "Facility not found!",
                success: false
            });
        }
        return res.status(200).send({
            data: facility[0],
            success: true
        })
    }
    catch(err) {
        return res.status(500).json({
            message:"Internal server error",
            success:false
        });
    }
});

router.post('/', async (req, res) => {
    let facilityData = {
        ...req.body,
        id: uuidv4()
    };
    try{
        const reservationDoc = new Facilities(facilityData);
        await reservationDoc.save();
        return res.status(200).json({
            data: facilityData,
            success: true,
        });
    }
    catch(err) {
        return res.status(500).json({
            message:"Internal server error",
            success:false
        });
    }
});

module.exports = router;