'use strict'
it('should obtain a postAuth', function * () {
  this.params = {
    amount: this.data.amount,
    reference: this.preAuth.referencia
  }
  this.preAuth = yield this.payworks.postAuth(this.params)
  console.log('postAuth : ', this.postAuth)
})
