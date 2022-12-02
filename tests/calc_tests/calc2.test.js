const Calculator = require('../calc');

let calc2=new Calculator(95,51)

test('95+51  is expected to result to 146', () => {
    expect(calc2.add()).toBe(146);
  });

test('95-51  is expected to result to 44', () => {
    expect(calc2.sub()).toBe(44);
  });

test('95*51  is expected to result to 4.845', () => {
    expect(calc2.mul()).toBe(4845);
  });

  test('95/51  is expected to result to 1,863', () => {
    expect(calc2.div()).toBe(1.863);
  });