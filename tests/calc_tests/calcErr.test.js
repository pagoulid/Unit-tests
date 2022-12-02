const Calculator = require('../calc');
let zeroCalc=new Calculator(0,-95)
let NonDefCalc=new Calculator(0,0)
let ErrCalc=new Calculator(95,0)


test('0/95  is expected to result to 0', () => {
    expect(zeroCalc.div()).toBe(0);
  });

  test('0/0  is expected to result to Non-defined', () => {
    expect(NonDefCalc.div()).toBe('Non-defined');
  });

  test('95/0  is expected to result to Error: Division by zero', () => {
    expect(ErrCalc.div()).toBe('Error: Division by zero');
  });