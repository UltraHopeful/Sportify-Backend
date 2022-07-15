const express = require("express");
const Facilities = require("../models/facilities");
const router = express.Router();

/**
 * This API gets all the facilities available for reservation.
 */
router.get("/facility", async (req, res) => {
  try {
    const allFacilities = await Facilities.find();
    return res.status(200).json({
      data: allFacilities,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
});
module.exports = router;
