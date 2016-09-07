'use strict'
it('should obtain a refund', function * () {
    this.params = Object.assign(this.data,{control_number: this.controlNumber()} )
  this.payment = yield this.payworks.auth(this.params)
  this.params = {
    amount: 189.00,
    reference: this.payment.referencia
  }
  this.refund = yield this.payworks.refund(this.params)
  console.log('refund : ', this.refund)
})
