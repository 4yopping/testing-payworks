'use strict'
it('should obtain a reverse', function * () {
    this.params = Object.assign(this.data,{control_number: this.controlNumber()} )
  this.payment = yield this.payworks.auth(this.params)
  this.params = {
    reference: this.payment.referencia
  }
  this.reverse = yield this.payworks.reverse(this.params)
  console.log('reverse : ', this.reverse)
})
