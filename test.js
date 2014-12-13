var assert   = require('assert'),
    colorify = require('./colorify.min.js')

describe('colorifyjs', function() {
    it('should return language colors', function() {
        colorify(function(colors) {
            assert(Object.keys(colors).length > 0, 'Colors returned')
        })
    })
})
