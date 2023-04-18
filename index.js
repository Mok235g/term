const express = require('express')
const bodyParser = require('body-parser')
const twvoucher = require('@fortune-inc/tw-voucher');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/:phone/:link', (req, res) => {
  const phone = req.params.phone
  const link = req.params.link
  
  twvoucher(`${phone}`,`${link}`).then(redeemed => {
    res.send({
        status: 'success',
        amount: redeemed.amount
    })
}).catch(() => {
     res.send({
        message: "ลิ้งอั่งเปาไม่ถูกต้อง"
    })
})
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
