'use strict'
it('should obtain a cancelation', function * () {
    this.params = Object.assign(this.data,{control_number: this.controlNumber()} )
  this.payment = yield this.payworks.auth(this.params)
  this.params = {
    reference: this.payment.referencia
  }
  this.cancelation = yield this.payworks.cancel(this.params)
  console.log('cancelation : ', this.cancelation)
})
