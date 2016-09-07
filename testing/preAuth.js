'use strict'
it('should obtain preAuth', function * () {
  this.params = Object.assign(this.data,{control_number: this.controlNumber()} )
  this.preAuth = yield this.payworks.preAuth(this.params)
  console.log('preAuth : ', this.preAuth)
})
