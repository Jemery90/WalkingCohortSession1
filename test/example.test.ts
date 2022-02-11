describe("fizzbuzz", () => {
  describe("boundary checks", () => {
    xit.each([
      [0, new Error("Out of bounds")],
      [101, new Error("Out of bounds")],
    ])(
      "given an input of integer %i an exception is thrown",
      (int: number, expected: Error) => {
        expect(() => fizzBuzz(int)).toThrow(expected);
      }
    );
  });
  xit.each([
    [1, "1"],
    [2, "2"],
    [3, "fizz"],
    [4, "4"],
    [5, "buzz"],
    [6, "fizz"],
    [10, "buzz"],
    [15, "fizzbuzz"],
  ])(
    "given an input of integer %i a string of %s is returned",
    (int: number, expected: string) => {
      expect(fizzBuzz(int)).toBe(expected);
    }
  );
});

function fizzBuzz(int: number): string {
  if (int < 1 || int > 100) throw new Error("Out of bounds");
  if (int % 15 === 0) return "fizzbuzz";
  if (int % 3 === 0) return "fizz";
  if (int % 5 === 0) return "buzz";
  return `${int}`;
}
