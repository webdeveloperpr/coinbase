const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const api = require('./api');
const actions = require('./actions')(api);

const buyEvent = {
  "type": "market",
  "action": "buy",
  "product_id": "",
};


const sellEvent = {
  "type": "market",
  "action": "sell",
  // 'BTC-USD
  "product_id": "",
  // BTC
  "currency": "",
  "size": "0"
};

app.use(bodyParser.json())

app.post('/buy', function (req, res) {
  const event = {
    ...buyEvent,
    ...req.body
  }

  actions
    .buy(event)
    .then(x => {
      res.send(x)
    }).catch(err => {
      console.log(err);
      res.send(err)
    })
})

app.post('/sell', function (req, res) {
  const event = {
    ...sellEvent,
    ...req.body
  }

  actions
    .sell(event)
    .then(x => {
      res.send('ok')
    }).catch(err => {
      console.log(err);
      res.send('error')
    })
})

app.listen(3000)