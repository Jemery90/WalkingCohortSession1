// X always goes first
// Players alternate placing X’s and O’s on the board
// Players cannot play on a played position
// A player with 3 X’s or 3 O’s in a row (vertically, horizontally or diagonally) wins the game.
// If all 9 squares are filled and neither player achieves 3 in a row, the game is a draw.

import { TicTacToeArchive } from "../src/TicTacToeArchive";

describe("tic tac toe", () => {
  it("players cannot play the same position twice", () => {
    const ticTacToeArchive = new TicTacToeArchive();
    ticTacToeArchive.play(0, 0);
    ticTacToeArchive.play(1, 1);
    ticTacToeArchive.play(2, 2);
    expect(() => ticTacToeArchive.play(0, 0)).toThrow("tile already taken!");
  });

  it("game should throw if played 10 times", () => {
    const ticTacToeArchive = new TicTacToeArchive();
    ticTacToeArchive.play(0, 0);
    ticTacToeArchive.play(0, 1);
    ticTacToeArchive.play(0, 2);

    ticTacToeArchive.play(1, 0);
    ticTacToeArchive.play(1, 1);
    ticTacToeArchive.play(1, 2);

    ticTacToeArchive.play(2, 0);
    ticTacToeArchive.play(2, 1);
    ticTacToeArchive.play(2, 2);

    expect(() => ticTacToeArchive.play(3, 3)).toThrow("all tiles are full!");
  });

  it("player X wins the game by having 3 tiles aligned vertically on first column", () => {
    const ticTacToeArchive = new TicTacToeArchive();
    expect(ticTacToeArchive.play(0, 0)).toBe("");
    expect(ticTacToeArchive.play(1, 1)).toBe("");
    expect(ticTacToeArchive.play(0, 1)).toBe("");
    expect(ticTacToeArchive.play(2, 1)).toBe("");
    expect(ticTacToeArchive.play(0, 2)).toBe("Player X has won!");
  });


  it("player O wins the game by having 3 tiles aligned vertically on first column", () => {
    const ticTacToeArchive = new TicTacToeArchive();
    expect(ticTacToeArchive.play(1, 1)).toBe("");
    expect(ticTacToeArchive.play(0, 0)).toBe("");
    expect(ticTacToeArchive.play(2,2)).toBe("");
    expect(ticTacToeArchive.play(0, 1)).toBe("");
    expect(ticTacToeArchive.play(1, 2)).toBe("");
    expect(ticTacToeArchive.play(0, 2)).toBe("Player O has won!");
  });

  it(`player X wins the game by having 3 tiles aligned vertically
      on first column by the last play`, () => {
    const ticTacToeArchive = new TicTacToeArchive();
    expect(ticTacToeArchive.play(0, 0)).toBe("");
    expect(ticTacToeArchive.play(1, 1)).toBe("");

    expect(ticTacToeArchive.play(0, 1)).toBe("");
    expect(ticTacToeArchive.play(2, 1)).toBe("");

    expect(ticTacToeArchive.play(2, 2)).toBe("");
    expect(ticTacToeArchive.play(1, 0)).toBe("");

    expect(ticTacToeArchive.play(1, 2)).toBe("");
    expect(ticTacToeArchive.play(2, 0)).toBe("");   

    expect(ticTacToeArchive.play(0, 2)).toBe("Player X has won!");
  });


});
