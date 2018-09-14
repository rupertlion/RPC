const { Rpc } = require('./spec.helper')

describe('Rock Paper Scissors', () => {
    let rpc = new Rpc

    it('returns a message if no symbol is chosen', () => {
        expect(rpc.check(null)).to.eql('You need to chose a symbol to play')
    })

})