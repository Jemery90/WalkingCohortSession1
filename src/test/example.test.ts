describe('fizzbuzz', () => {
    it("given an input of integer 1 a string of 1 is returned",() => {
        expect(fizzBuzz(1)).toBe("1")
    });
    it("given an input of integer 2 a string of 2 is returned",() => {
        expect(fizzBuzz(2)).toBe("2")
    })
    it("given an input of integer 3 a string of fizz is returned", () =>{
        expect(fizzBuzz(3)).toBe("fizz");
    })
}
)

function fizzBuzz(int: number): any {
    return `${int}`;
    }

