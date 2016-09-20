'use strict'


  it('should obtain a verify', function * () {
      this.params = Object.assign(this.data,{control_number: this.controlNumber()} )
    this.preAuth = yield this.payworks.preAuth(this.params)
    console.log('preAuth : ', this.preAuth)
    this.params = {
      reference: this.preAuth.referencia,
      control_number: this.preAuth.referencia
    }
    this.verify = yield this.payworks.verify(this.params)
    console.log('verify : ', this.verify)

    this.close = yield this.payworks.close()
    console.log('close : ', this.close)
  })
