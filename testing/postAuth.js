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
    mode:'AUT',
  merchant: '7652969',
  user: 'a7652969',
  password: 'a7652969',
  terminal: '07652969'
})
let data = {
  mode: 'AUT',
  amount: 189.00,
  entry_mode: 'MANUAL',
  card_number: '4111111111111111',
  card_exp: '1220',
  security_code: '123',
  control_number: controlNumber()
}
it('should obtain a postAuth', function * () {
  this.params = {
    amount: 189.00,
    reference: this.preAuth.referencia
  }
  this.preAuth = yield payworks.postAuth(this.params)
  console.log('postAuth : ', this.postAuth)
})
