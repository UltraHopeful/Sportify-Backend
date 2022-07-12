//Author: Aravind Jayanthi (B00868943)
//Email: ar687531@dal.ca
const Facilities = require("../models/facilities");

const getSingleFacilityData = async (facilityId) => {
    const facilityData = await Facilities.findOne({ id: facilityId });
    return new Promise((resolve) => {
        if (!facilityData) {
            resolve(facilityData);
        }
        else {
            resolve({
                equipmentName: facilityData.name,
                equipmentLoc: facilityData.location,
                equipmentCategory: facilityData.category,
                equipmentImg: facilityData.image
            });
        }
    });
}

const getFacilitiesData = async (facilityIds) => {
    const faciltiesData = await Facilities.find({
        id:  facilityIds
    });
    return new Promise((resolve) => {
        if (faciltiesData.length == 0) {
            resolve(faciltiesData);
        }
        else {
            resolve(faciltiesData.map((facility) => {
                return {
                    id: facility.id,
                    equipmentImg: facility.image,
                }
            }));
        }
    })
}

module.exports = { getSingleFacilityData, getFacilitiesData };