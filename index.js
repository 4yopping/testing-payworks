'use strict'
const Payworks = require('banorte-payworks')
require('co-mocha')
// you pass the mode of every call from BPW_MODE, set to PRD
// to run in mode production, default mode is RND
describe('Payworks#auth', function () {
    before(function () {
        this.controlNumber = function () {
            return ''+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
            +Math.floor(10*Math.random())+Math.floor(10*Math.random())+Math.floor(10*Math.random())
        }

        this.payworks = new Payworks({
            // here put the mode of transaction, put PRD to do en production mode
          merchant: '7652969',
          user: 'a7652969',
          password: 'a7652969',
          terminal: '07652969'
        })
        this.data = {
          amount: 189.00,
          entry_mode: 'MANUAL',
          card_number: '4111111111111111',
          card_exp: '1220',
          security_code: '123',
          control_number: this.controlNumber()
        }
    });
    require('./testing/auth')
    require('./testing/reverse')
    require('./testing/cancelation')
    require('./testing/preAuth')
    require('./testing/postAuth')
    require('./testing/refund')
    require('./testing/verify')
})
