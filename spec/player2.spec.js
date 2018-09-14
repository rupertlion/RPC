const { Player2 } = require('./spec.helper')

describe('Player 1', () => {
    let player2 = new Player2

    beforeEach(function() {
        player2 = new Player2({symbol: 'Scissors'});
    });

    it('should enter a choice of symbol', () => {
        expect(player2.symbol).to.equal('Scissors');
    });

})