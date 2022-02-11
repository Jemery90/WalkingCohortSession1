describe("Tic Tac Toe", () => {
  it.each`
    tile
    ${1}
    ${2}
    ${3}
  `("players cannot play the same position twice on tile $tile", ({ tile }) => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0);
    ticTacToe.play(5);
    ticTacToe.play(8);
    ticTacToe.play(tile);
    expect(() => ticTacToe.play(tile)).toThrow("tile already taken!");
  });

  it("o should play after x", () => {
    const ticTacToe = new TicTacToe();
    const state = ticTacToe.play(0);
    expect(state).toBe(State.OPlaysNext);
  });

  it("x should play after o", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0);
    const state = ticTacToe.play(1);
    expect(state).toBe(State.XPlaysNext);
  });

  it("x should play after o", () => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(0);
    ticTacToe.play(1);
    const state = ticTacToe.play(2);
    expect(state).toBe(State.OPlaysNext);
  });

  it.each`
    plays
    ${[0, 2, 3, 7, 6]}
    ${[1, 2, 4, 3, 7]}
    ${[2, 1, 5, 3, 8]}
  `("player x wins if any horizontal columns are played by it", ({ plays }) => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(plays[0]);
    ticTacToe.play(plays[1]);

    ticTacToe.play(plays[2]);
    ticTacToe.play(plays[3]);

    const state = ticTacToe.play(plays[4]);

    expect(state).toBe(State.XWon);
  });

  it.each`
    plays
    ${[0, 2, 3, 7, 6]}
  `("player o wins if any horizontal columns are played by it", ({ plays }) => {
    const ticTacToe = new TicTacToe();
    ticTacToe.play(plays[0]);
    ticTacToe.play(plays[1]);

    ticTacToe.play(plays[2]);
    ticTacToe.play(plays[3]);

    const state = ticTacToe.play(plays[4]);

    expect(state).toBe(State.XWon);
  });
});

/*
Tic Tac Toe Board:
    0,  1,  2
    3,  4,  5
    6,  7,  8

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],

[0, 3, 6],
[1, 4, 7],
[2, 5, 8],

[0, 4, 8],
[2, 4, 6]

[   'x', '-', 'o',
    'x', '-', '-',
    'x', 'o', '-']

[   '-', 'x', 'o',
    '-', 'x', '-',
    'o', 'x', '-']


[   'x', '-', 'o',
    ' ', 'x', '-',
    '-', 'o', 'x']
*/

export type Tile = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum State {
  XPlaysNext = "x plays next",
  OPlaysNext = "o plays next",
  XWon = "x won 🎉🎉",

  NoWinnerYet = "no winner yet, carry on playing!",
}

export enum Player {
  x,
  o,
}

export class TicTacToe {
  play(tile: Tile): State {
    if (this.board[tile]) {
      throw new Error("tile already taken!");
    }

    const player =
      this.board.filter((t) => t !== undefined).length % 2 === 0
        ? Player.x
        : Player.o;

    this.board[tile] = player;

    const horizontalWin = this.checkHorizontalWin();
    if (horizontalWin !== State.NoWinnerYet) {
      return horizontalWin;
    }

    return player === Player.x ? State.OPlaysNext : State.XPlaysNext;
  }

  checkHorizontalWin = (): State => {
    if (
      this.board[0] === Player.x &&
      this.board[3] === Player.x &&
      this.board[6] === Player.x
    )
      return State.XWon;

    if (
      this.board[1] === Player.x &&
      this.board[4] === Player.x &&
      this.board[7] === Player.x
    )
      return State.XWon;

    if (
      this.board[2] === Player.x &&
      this.board[5] === Player.x &&
      this.board[8] === Player.x
    )
      return State.XWon;

    return State.NoWinnerYet;
  };

  private board = new Array();
}
