'use strict'
const Payworks = require('banorte-payworks')
require('co-mocha')
let controlNumber = function () {
    return ''+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
    +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
}

let payworks = new Payworks({
    // here put the mode of transaction, put PRD to do en production mode
  merchant: '7652969',
  user: 'a7652969',
  password: 'a7652969',
  terminal: '07652969'
})
let data = {
  amount: 189.00,
  entry_mode: 'MANUAL',
  card_number: '4111111111111111',
  card_exp: '1220',
  security_code: '123',
  control_number: controlNumber()
}
it('should obtain a cancelation', function * () {
  this.params = {
    reference: this.payment.referencia
  }
  this.cancelation = yield payworks.cancel(this.params)
  console.log('cancelation : ', this.cancelation)
})
