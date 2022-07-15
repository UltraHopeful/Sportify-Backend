const express = require('express');
const router = express.Router()

const billingController = require('../controllers/membershipBilling');
const membershipController = require('../controllers/membership');

// billing API
router.post('/api/membership/create-billing-info', billingController.createBillingInfo);
router.get('/api/membership/billing-info/:id', billingController.findBillingInfo);
router.put('/api/membership/update-billing-info/:id', billingController.updateBillingInfo);

// membership API
router.post('/api/membership/create-purchase', membershipController.createMembership);
router.get('/api/membership/purchase', membershipController.findMembership);
router.get('/api/membership/purchase/:id', membershipController.findMembership);
router.put('/api/membership/update-purchase/:id', membershipController.updateMembership);


module.exports = router;