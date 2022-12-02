const Calculator = require('../calc');
let calc7=new Calculator(-95,-51)

test('-95-51  is expected to result to -146', () => {
    expect(calc7.add()).toBe(-146);
  });

test('-95-(-51) is expected to result to -44', () => {
    expect(calc7.sub()).toBe(-44);
  });

test('(-95)*(-51)  is expected to result to 4.845', () => {
    expect(calc7.mul()).toBe(4845);
  });

  test('(-95)/(-51)  is expected to result to 1,863', () => {
    expect(calc7.div()).toBe(1.863);
  });