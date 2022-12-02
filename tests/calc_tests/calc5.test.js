const Calculator = require('../calc');
let calc5=new Calculator(51,-95)

test('51-95  is expected to result to -44', () => {
    expect(calc5.add()).toBe(-44);
  });

test('51-(-95) is expected to result to 146', () => {
    expect(calc5.sub()).toBe(146);
  });

test('51*(-95)  is expected to result to -4.845', () => {
    expect(calc5.mul()).toBe(-4845);
  });

  test('51/(-95)  is expected to result to -0,537', () => {
    expect(calc5.div()).toBe(-0.537);
  });