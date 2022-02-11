export class TicTacToeArchive {
  private board: Position[];

  constructor() {
    this.board = new Array<Position>();
  }

  public play(x: number, y: number): string {
    if (this.board.length === 9) throw new Error("all tiles are full!");
    this.board.forEach((p) => {
      if (p.x === x && p.y === y) throw new Error("tile already taken!");
    });

    this.board[this.board.length] = new Position(x, y);

    // List of all possible winning conditions E.G ([0,1], [0, 2], [0, 0])
    // On each play check length of array, if even iterate over all even plays
    // if odd iterate over all odd plays

    //console.log({ board: this.board });
    const a = this.board.map((p) => {
      p.x === 0;
      return this.board.indexOf(p);
    });
    if (a === [0, 2, 4] || a === [0, 2, 8] || a === [2, 4, 6])
      if (
        this.board[0]?.x === 0 &&
        this.board[2]?.x === 0 &&
        this.board[4]?.x === 0 &&
        this.board[6]?.x === 0 &&
        this.board[8]?.x === 0
      ) {
        //if (a.every(b => [0,1,2].includes(b))

        return "Player X has won!";
      }

    if (
      this.board[1]?.x === 0 &&
      this.board[3]?.x === 0 &&
      this.board[5]?.x === 0
    ) {
      return "Player O has won!";
    }

    return "";
  }
}

class Position {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
