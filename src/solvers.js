/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = []
  var board = new Board({n: n});
  var numRooks = 1;
  for(var j = 0; j < n; j++){
    board.togglePiece(0,j)
    solution.push(board.get(0))
    if(n > 1){
      for(var i = 1; i < n; i++){
        for(var k = 0; k < n; k++){
          board.togglePiece(i,k);
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(i,k)
          }
          else{
            numRooks++
          }
        }
        solution.push(board.get(i))
      }
    }
    if(numRooks === n){
      console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
      return solution;
    }
    board = new Board({n:n})
    numRooks = 1;
    solution = []
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []
  var board = new Board({n:n});
  var numQueens = 0;
  for(var j = 0; j < n; j++){
    board.togglePiece(0,j)
    numQueens ++;
    solution.push(board.get(0))
    if(n > 1){
      for(var i = 1; i < n ; i++){
        for(var k = 0; k < n; k++){
          board.togglePiece(i,k);
          if (board.hasAnyQueensConflicts()) {
            board.togglePiece(i,k)
          }
          else{
            numQueens++
          }
        }
        solution.push(board.get(i))
        console.log('solution per row', solution, '   j: ', j, '   i: ', i , '    k: ',k)
      }
    }
    if(numQueens === n){
      console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
      return solution;
    }
    numQueens = 0;
    solution = []
    board = new Board({n:n})

  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
