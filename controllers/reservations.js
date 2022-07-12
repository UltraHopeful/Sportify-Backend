//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
const FacilitiesController = require('../controllers/facilities');
const Reservations = require('../models/reservations');

const getAllReservations = async (userId) => {
    const reservations = await Reservations.find({ reserved_by: userId });
    if (!reservations || reservations.length == 0) {
        return new Promise((resolve) => {
            resolve(reservations);
        });
    }
    const ids = reservations.map(reservation => reservation.facility_id);
    const facilitiesData = await FacilitiesController.getFacilitiesData(ids);
    // console.log(facilitiesData);
    const response = mergeFacilitiesDataWithReservations(facilitiesData, reservations);
    return new Promise(resolve => {
        resolve(response);
    });
}

const getRawReservation = async (reservationId) => {
    const reservation = await Reservations.findOne({id: reservationId});
    return new Promise((resolve) => {
        resolve(reservation);
    });
}

const validateCancelRequest = async (reservationId) => {
    const reservation = await Reservations.findOne({id: reservationId});
    if (!reservation) {
        return new Promise((resolve) => {
            resolve({
                status: 404,
                message: "Reservation not found!",
            });
        });
    }

    if (reservation.status === 'Cancelled') {
        return new Promise((resolve) )
    }
}

function mergeFacilitiesDataWithReservations(facilitiesData, reservations) {
    if (reservations?.length == 0 || facilitiesData?.length == 0) {
        return reservations;
    }
    return reservations.map(reservation => {
        const facilityId = reservation.facility_id;
        const facility = facilitiesData.find(facility => facility.id === facilityId);
        return {
            id: reservation.id,
            reservationFrom: reservation.from,
            reservationTo: reservation.to,
            reservationDate: reservation.booked_date,
            reservedBy: 'John Doe',
            reservedFor: reservation.reserved_for,
            equipmentImg: facility.equipmentImg,
        }
    });
}

const getSingleReservation = async (reservationId) => {
    const reservationRes = await Reservations.findOne({ id: reservationId });
    if (!reservationRes) {
        return new Promise((resolve) => {
            resolve(reservationRes);
        })
    }

    const facilityDetails = await FacilitiesController.getSingleFacilityData(reservationRes.facility_id);
    if (!facilityDetails) {
        return new Promise((resolve) => {
            resolve(reservationRes);
        })
    }

    const reservationWrap = {
        id: reservationId,
        reservationFrom: reservationRes.from,
        reservationTo: reservationRes.to,
        reservationDate: reservationRes.booked_date,
        reservedBy: 'John Doe',
        reservedFor: reservationRes.reserved_for,
        reservationStatus: reservationRes.status,
        equipmentName: facilityDetails.equipmentName,
        equipmentLoc: facilityDetails.equipmentLoc,
        equipmentImg: facilityDetails.equipmentImg,
        equipmentCategory: facilityDetails.equipmentCategory
    }


    return new Promise((resolve) => {
        resolve(reservationWrap);
    });
}

module.exports = { getAllReservations, getSingleReservation, getRawReservation };