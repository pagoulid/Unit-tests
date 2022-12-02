const Calculator = require('../calc');
let calc4=new Calculator(95,-51)

test('95-51  is expected to result to 44', () => {
    expect(calc4.add()).toBe(44);
  });

test('95-(-51) is expected to result to 146', () => {
    expect(calc4.sub()).toBe(146);
  });

test('95*(-51)  is expected to result to -4.845', () => {
    expect(calc4.mul()).toBe(-4845);
  });

  test('95/(-51)  is expected to result to -1,863', () => {
    expect(calc4.div()).toBe(-1.863);
  });