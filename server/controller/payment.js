
const axios = require('axios')
const {Payment} = require ('../indexdatabase.js')
require('dotenv').config()

const postFunctionToFlouci = async (req, res)=> {

    const url = "https://developers.flouci.com/api/generate_payment"
    const payload = {
      "app_token": "6f96a294-dc4a-48a5-82d4-dde64126f524",
      "app_secret": process.env.FLOUCI_SECRET,
      "amount": "30500",
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "http://192.168.151.34:8081/success",
    "fail_link": "http://192.168.151.34:8081/fail",
    "developer_tracking_id": "055473ea-26cf-4200-8e2f-1e0a96fc3041"
    }

    await axios.post(url, payload).then((response)=>{
      res.status(200).send(response.data)
    }).catch((error)=>{
      res.status(500).send(error)
    })

}

const verifyPayment = async (req, res)=> {
  const {payment_id } = req.params
  const {requestId, amount} = req.body
  await axios.get(`https://developers.flouci.com/api/verify_payment/${payment_id}`, {
    headers: {
      'Content-Type': 'application/json',
      'apppublic': '6f96a294-dc4a-48a5-82d4-dde64126f524',
      'appsecret': process.env.FLOUCI_SECRET
    }
  }).then((response)=>{
    res.status(200).send(response.data)
    Payment.create({
      amount: amount,
      requestId: requestId,
      status: response.data.result.status
    })
  }).catch((error)=>{
    res.status(500).send(error)
  })

}

module.exports = {
   postFunctionToFlouci,
    verifyPayment
}