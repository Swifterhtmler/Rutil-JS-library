// average function

Array.prototype.avr = function () {
    if (this.length === 0) {
       return console.log("Cannot calculate length of an empty array")
    } else {
    let sum = 0;    
    for (let i = 1; i < this.length; i++) {
        sum += this[i]
    }
   let average = sum / this.length
   return average.toFixed(3)
  }
}
let arr = [1,7,4,9,7,5]
let arr2 = [1,2,6,6,7,5]
let arr3 = [1,7,5,9,7,5]
let arr4 = [1,7,5,9,7,5]

console.log(arr.avr()) // 5.333
console.log(arr2.avr()) // 4.333
console.log(arr3.avr()) // 5.500
console.log(arr4.avr()) // 5.500

// this file is still in production

String.prototype.rev = function () {
    return this.split('').reverse().join('');
}

let myString = "Hello";

console.log(myString.rev())

// returns olleH

// all the tests below line 37 (this line are made by ai)

const { isEv, avr, bsort, qsort, rev } = require('../src/index'); // Adjust path to src/index.js

describe('isEv', () => {
    test('should return true for even numbers', () => {
        expect(isEv(2)).toBe(true);
        expect(isEv(0)).toBe(true);
        expect(isEv(-4)).toBe(true);
    });

    test('should return false for odd numbers', () => {
        expect(isEv(1)).toBe(false);
        expect(isEv(-3)).toBe(false);
    });
});

describe('Array.prototype.avr', () => {
    beforeEach(() => {
        // Restore original Array.prototype.avr before each test
        Array.prototype.avr = require('../src/index').avr;
    });

    test('should return the average of the array elements', () => {
        expect([1, 2, 3, 4, 5].avr()).toBe('3.000');
        expect([10, 20, 30].avr()).toBe('20.000');
    });

    test('should handle empty arrays', () => {
        console.log = jest.fn(); // Mock console.log
        expect([].avr()).toBeUndefined(); // Should not return a value
        expect(console.log).toHaveBeenCalledWith("Cannot calculate length of an empty array");
    });
});

describe('Array.prototype.bsort', () => {
    beforeEach(() => {
        // Restore original Array.prototype.bsort before each test
        Array.prototype.bsort = require('../src/index').bsort;
    });

    test('should sort the array in ascending order', () => {
        expect([5, 2, 9, 1].bsort()).toEqual([1, 2, 5, 9]);
        expect([3, -1, 0].bsort()).toEqual([-1, 0, 3]);
    });
});

describe('Array.prototype.qsort', () => {
    beforeEach(() => {
        // Restore original Array.prototype.qsort before each test
        Array.prototype.qsort = require('../src/index').qsort;
    });

    test('should sort the array in ascending order using quicksort', () => {
        expect([5, 2, 9, 1].qsort()).toEqual([1, 2, 5, 9]);
        expect([3, -1, 0].qsort()).toEqual([-1, 0, 3]);
        expect([1].qsort()).toEqual([1]); // Edge case with one element
    });
});

describe('String.prototype.rev', () => {
    beforeEach(() => {
        // Restore original String.prototype.rev before each test
        String.prototype.rev = require('../src/index').rev;
    });

    test('should reverse the string', () => {
        expect('hello'.rev()).toBe('olleh');
        expect('world'.rev()).toBe('dlrow');
        expect('a'.rev()).toBe('a'); // Edge case with one character
        expect(''.rev()).toBe(''); // Edge case with empty string
    });
});

// quadratic formula 


function quad(a,b,c) {
    let discriminant = b**2 + 4 * a * c;
 
    if (discriminant === 0 || discriminant < 0) {
       return "No real roots!";
       
    } else {

    
    let resultA = -1 * b + Math.sqrt(discriminant) / 2*a;
    let resultB = -1 * b - Math.sqrt(discriminant) / 2*a;
 
    return resultA + " or " + resultB;
    }
 }

 console.log(quad(1,23,5))
// custom tests


 test("some examples", () => {
   expect((1,3,6).toBeUndefined());
}
)



// new feature 1.8


function rand(min, max) {
    let range = max - min + 1;
    let genratedMumber = Math.floor(Math.random() * range) + min;
       return genratedMumber; 
 }
 
 console.log(rand(2,65));
 console.log(rand(5,6));
 console.log(rand(7,9));
 console.log(rand(5,8));
 console.log(rand(7,9));
 console.log(rand(2,9));
 console.log(rand(1,28));
 console.log(rand(2,8289));
 console.log(rand(2,987));
 
 


