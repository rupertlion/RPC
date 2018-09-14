const { Rpc } = require('./spec.helper')

describe('Rock Paper Scissors', () => {
    let rpc = new Rpc
    let player1;
    let player2;
  
    beforeEach(function() {
        player1 = new Player1({symbol: rock});
        player2 = new Player2({symbol: scissors});
        rpc = new Rpc();
    });
  
    it('returns a message if no symbol is chosen', () => {
        expect(rpc.check(null)).to.eql('You need to chose a symbol to play')
    })

    it('calculates the winner of the game', function() {
        rpc(player1, player2);
        expect(player1.winner).to.equal(true);
    });

    it('presents positive message to the winner', () => {
        rpc(player1, player2);
        expect(player1.message).to.equal('Winner!');
    });
})