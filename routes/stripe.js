const express = require('express')
const router = express.Router();

const stripeController = require('../controllers/stripe')


router.post('/api/stripe/create-checkout-session', stripeController.checkoutSession)


module.exports = router;