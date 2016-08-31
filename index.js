'use strict'

const Payworks = require('banorte-payworks')
require('co-mocha')

let payworks = new Payworks({
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
  security_code: '123'
}

describe('Payworks#auth', function () {
  it('should obtain a payment', function * () {
    this.params = Object.assign({}, data)
    this.payment = yield payworks.auth(this.params)
    console.log('payment : ', this.payment)
  })

  it('should obtain a cancelation', function * () {
    this.params = {
      reference: this.payment.referencia
    }
    this.cancelation = yield payworks.cancel(this.params)
    console.log('cancelation : ', this.cancelation)
  })

  it('should obtain preAuth', function * () {
    this.params = Object.assign({}, data)
    this.preAuth = yield payworks.preAuth(this.params)
    console.log('preAuth : ', this.preAuth)
  })
  it('should obtain a postAuth', function * () {
    this.params = {
      amount: 189.00,
      reference: this.preAuth.referencia
    }
    this.preAuth = yield payworks.postAuth(this.params)
    console.log('postAuth : ', this.postAuth)
  })
  it('should obtain a refund', function * () {
    this.params = Object.assign({}, data)
    this.payment = yield payworks.auth(this.params)
    this.params = {
      amount: 189.00,
      reference: this.payment.referencia
    }
    this.refund = yield payworks.refund(this.params)
    console.log('refund : ', this.refund)
  })

  it('should obtain a reverse', function * () {
    this.params = Object.assign({}, data)
    this.payment = yield payworks.auth(this.params)
    this.params = {
      reference: this.payment.referencia
    }
    this.reverse = yield payworks.reverse(this.params)
    console.log('reverse : ', this.reverse)
  })

  it('should obtain a verify', function * () {
    this.params = Object.assign({}, data)
    this.preAuth = yield payworks.preAuth(this.params)
    console.log('preAuth : ', this.preAuth)
    this.params = {
      reference: this.preAuth.referencia,
      control_number: this.preAuth.referencia
    }
    this.verify = yield payworks.verify(this.params)
    console.log('verify : ', this.verify)
  })
})
