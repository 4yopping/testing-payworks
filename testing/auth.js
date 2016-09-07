'use strict'

it('should obtain a payment', function * () {
  this.params = Object.assign(this.data,{control_number: this.controlNumber()})
  this.payment = yield this.payworks.auth(this.params)
  console.log('payment : ', this.payment)
})
