const TicTacToe = {
  moveCounter: 0,
  move: (playerMove) => {
    if(TicTacToe.moveCounter === 0 && playerMove === 'O'){
      throw 'X has to play first';
    }
    TicTacToe.moveCounter++;
  }
};



module.exports = TicTacToe;
