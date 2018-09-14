const { Player1 } = require('./spec.helper')

describe('Player 1', () => {
    let player1 = new Player1

    beforeEach(function() {
        player1 = new Player1({symbol: 'Rock'});
    });

    it('should enter a choice of symbol', () => {
        expect(player1.symbol).to.equal('Rock');
    });

})