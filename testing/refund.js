'use strict'
it('should obtain a refund', function * () {
  this.params = {
    amount: this.data.amount,
    reference: this.payment.referencia
  }
  this.refund = yield this.payworks.refund(this.params)
  console.log('refund : ', this.refund)
})
