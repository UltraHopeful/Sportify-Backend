//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
const express = require('express');
const {v4: uuidv4} = require('uuid');
const Reservations = require('../models/reservations');
const ReservationController = require('../controllers/reservations');
const router = express.Router();

router.post('/', async (req, res) => {
    let reservationDetails = req.body;
    reservationDetails.id = uuidv4();
    reservationDetails.status = 'Active';
    try{
        const reservationDoc = new Reservations(reservationDetails);
        await reservationDoc.save();
        return res.status(200).json({
            success: true
        });
    }
    catch(err) {
        return res.status(500).json({
            message:"Internal server error",
            success:false
        });
    }
});

router.put('/cancel-reservation/:reservationId', async (req, res, next) => {
    const reservationId = req.params.reservationId;
    const reservation = await ReservationController.getRawReservation(reservationId);
    if (!reservation) {
        return res.status(404).json({
            message: "Reservation not found!",
            success: false,
        });
    }
    if (reservation.status === 'Cancelled') {
        return res.status(200).json({
            message: "Reservation was already cancelled",
            success: true,
        })
    }
    if (reservation.from <= new Date()) {
        return res.status(400).json({
            message: "Past reservations can't be cancelled",
            success: false,
        })
    }
    req.body = reservation;
    next();
}, async (req, res, next) => {
    const updatedDoc = await Reservations.findOneAndUpdate({id: req.params.reservationId}, {status: 'Cancelled'}, {new: true});
    return res.status(200).json({
        data: updatedDoc,
        success: true
    })
})

router.get('/my-reservations/:userId', async (req, res) => {
    const userId = req.params.userId;
    const reservations = await ReservationController.getAllReservations(userId);
    return res.status(200).json({
        data: reservations,
        success: true
    });
});

router.get('/my-single-reservation/:reservationId', async (req, res) => {
    const reservationId = req.params.reservationId;
    const reservationRes = await ReservationController.getSingleReservation(reservationId);
    if (!reservationRes) {
        return res.status(404).json({
            message: "Reservation not found!",
            success: false
        });
    }
    return res.status(200).json({
        data: reservationRes,
        success: true
    });
});

module.exports = router;