const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100000;
    actual = sum(50000, 50000);
    expect(actual).toBe(expected)
  });

  test('can add two negative numbers', () => {
    expected = -21;
    actual = sum(-9, -12);
    expect(actual).toBe(expected);    
  });

  test('can add zero', () => {
    expected = 28;
    actual = sum(0, 28);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  
  test('can subtract two small positive integers', () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);
  });

  test('can subtract two small float numbers', () => {
    expected = 3.5;
    actual = subtract(5, 1.5);
    expect(expected).toBe(actual);
  });

});

describe('multiply', () => {

  test('can multiply two small positive integers', () => {
    expected = 10;
    actual = multiply(5, 2);
    expect(expected).toBe(actual);
  });

  test('can multiply a number by zero', () => {
    expected = 0;
    actual = multiply(0, 1);
    expect(expected).toBe(actual);
  });

});

describe('divide', () => {

  test('can divide a number by zero', () => {
    expected = Infinity;
    actual = divide(10, 0);
    expect(actual).toBe(expected);
  })

  test('can divide a positive integer by a negative integer', () => {
    expected = -5;
    actual = divide(25, -5);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can find the remainder of two small positive integers', () => {
    expected = 2;
    actual = modulus(14, 4);
    expect(actual).toBe(expected);
  });

  test('can find the modulo of a positive integer and a negative integer', () => {
    expected = 0;
    actual = modulus(90, -6);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('return true if number is even', () => {
    expected = true;
    actual = even(6);
    expect(actual).toBe(expected);
  });

  test('return true if number is zero', () =>{
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  })
});

describe('odd', () => {

  test('return true if number is odd', () => {
    expected = true;
    actual = odd(1)
    expect(actual).toBe(expected);
  });

  test('return true if negative integer is used', () => {
    expected = true;
    actual = odd(-5);
    expect(actual).toBe(expected);
  })

});
