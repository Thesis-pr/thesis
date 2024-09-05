const express = require('express')


const {postFunctionToFlouci, verifyPayment}= require('../controller/payment.js')
const paymentRouter = express.Router()
paymentRouter.post ('/pay', postFunctionToFlouci)
paymentRouter.post('/verify/:payment_id', verifyPayment)

paymentRouter.get('/success', (req, res) => {
    res.redirect('myapp://success');
});

paymentRouter.get('/fail', (req, res) => {
    res.redirect('myapp://fail');
});
module.exports = paymentRouter