const Calculator = require('../calc');
let calc6=new Calculator(-51,-95)

test('-51-95  is expected to result to -146', () => {
    expect(calc6.add()).toBe(-146);
  });

test('-51-(-95) is expected to result to 44', () => {
    expect(calc6.sub()).toBe(44);
  });

test('(-51)*(-95)  is expected to result to 4.845', () => {
    expect(calc6.mul()).toBe(4845);
  });

test('(-51)/(-95)  is expected to result to 0,537', () => {
    expect(calc6.div()).toBe(0.537);
  });