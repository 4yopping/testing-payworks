'use strict'
it('should obtain a postAuth', function * () {
  this.params = {
    amount: 189.00,
    reference: this.preAuth.referencia
  }
  this.preAuth = yield this.payworks.postAuth(this.params)
  console.log('postAuth : ', this.postAuth)
})
