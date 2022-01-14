describe('fizzbuzz', () => {
    it.each([
        [1, "1"],
        [2, "2"],
        [3, "fizz"],
        [4, "4"],
        [5, "fizz"]
    ])
    ("given an input of integer %i a string of %s is returned", (int:number, expected: string ) => {
        expect(fizzBuzz(int)).toBe(expected);
    })
}
)

function fizzBuzz(int: number): string {
    if (int === 3) return "fizz";
    return `${int}`;
}

