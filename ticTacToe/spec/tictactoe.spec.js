var TicTacToe = require('../game.js');

describe('player moves', () => {

  describe('X goes first', () => {

    it('does not allow O to play first', () => {
      expect(() => {
        TicTacToe.move('O');
      }).toThrow('X has to play first');
    });

    it('allows X to play first', () => {
      expect(() => {
        TicTacToe.move('X');
      }).not.toThrow();
    });

  });

  describe('O goes second', () => {

    it('allows O to play second', () => {
      expect(() => {
        TicTacToe.move('O');
      }).not.toThrow();
    });

    it('does not allow X to play second', () => {
      expect(() => {
        TicTacToe.move('X');
      }).toThrow('Wrong player');
    });

  })

});
