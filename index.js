'use strict'
// you pass the mode of every call from BPW_MODE, set to PRD
// to run in mode production, default mode is RND
describe('Payworks#auth', function () {
    require('./testing/auth')
    require('./testing/reverse')
    require('./testing/cancelation')
    require('./testing/preAuth')
    require('./testing/postAuth')
    require('./testing/refund')
    require('./testing/verify')
})
