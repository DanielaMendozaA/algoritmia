const { fizzBuzz, binaryToDecimal, decimalToBinary } = require('./algoritmia');

describe('fizzBuzz function', () => {
    it('should print "fizz" for multiples of 3', () => {
        console.log = jest.fn();
        fizzBuzz();
        expect(console.log).toHaveBeenCalledWith('fizz');
    });

    it('should print "buzz" for multiples of 5', () => {
        console.log = jest.fn();
        fizzBuzz();
        expect(console.log).toHaveBeenCalledWith('buzz');
    });

    it('should print "fizzbuzz" for multiples of 3 and 5', () => {
        console.log = jest.fn();
        fizzBuzz();
        expect(console.log).toHaveBeenCalledWith('fizzbuzz');
    });
});

describe('binaryToDecimal function', () => {
    it('should convert binary 10110 to decimal 22', () => {
        expect(binaryToDecimal(10110)).toBe(22);
    });

    it('should convert binary 1101 to decimal 13', () => {
        expect(binaryToDecimal(1101)).toBe(13);
    });
});

describe('decimalToBinary function', () => {
    it('should convert decimal 23 to binary "10111"', () => {
        expect(decimalToBinary(23)).toBe('10111');
    });

    it('should convert decimal 13 to binary "1101"', () => {
        expect(decimalToBinary(13)).toBe('1101');
    });
});
