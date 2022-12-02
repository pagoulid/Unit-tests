const Calculator = require('../calc');
let calc3=new Calculator(-51,95)

test('-51+95  is expected to result to 44', () => {
    expect(calc3.add()).toBe(44);
  });

test('-51-95  is expected to result to -146', () => {
    expect(calc3.sub()).toBe(-146);
  });

test('-51*95  is expected to result to -4.845', () => {
    expect(calc3.mul()).toBe(-4845);
  });

test('-51/95  is expected to result to -0,537', () => {
    expect(calc3.div()).toBe(-0.537);
  });