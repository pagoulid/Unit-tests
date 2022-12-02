const Calculator = require('../calc');

let calc1=new Calculator(51,95)
/*let calc2=new Calculator(95,51)
let calc3=new Calculator(-51,95)
let calc4=new Calculator(95,-51)
let calc5=new Calculator(51,-95)
let calc6=new Calculator(-51,-95)
let calc7=new Calculator(-95,-51)*/

test('51+95  is expected to result to 146', () => {
  expect(calc1.add()).toBe(146);
});
test('51-95 is expected to result to -44', () => {
    expect(calc1.sub()).toBe(-44);
  });
test('51*95  is expected to result to 4.845', () => {
    expect(calc1.mul()).toBe(4845);
  });

  test('51/95  is expected to result to 0,537', () => {
    expect(calc1.div()).toBe(0.537);
  });


