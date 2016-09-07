'use strict'
it('should obtain a cancelation', function * () {
  this.params = {
    reference: this.payment.referencia
  }
  this.cancelation = yield this.payworks.cancel(this.params)
  console.log('cancelation : ', this.cancelation)
})
