capital= require('../capitalize');

test('mario  is expected to convert to Mario', () => {
  expect(capital('mario')).toBe('Mario');
});

test('Mario  remains Mario', () => {
  expect(capital('Mario')).toBe('Mario');
});

test('64 days to IPcalypse string  is expected to convert to 64 Days to IPcalypse', () => {
  expect(capital('64 days to IPcalypse')).toBe('64 Days to IPcalypse');
});

test('64 Days to IPcalypse string  remains  64 Days to IPcalypse', () => {
  expect(capital('64 Days to IPcalypse')).toBe('64 Days to IPcalypse');
});

test('---- perfecto ---- is expected to convert to ---- Perfecto ---- ', () => {
  expect(capital('---- perfecto ---- ')).toBe('---- Perfecto ---- ');
});

test('---- Perfecto ---- remains ---- Perfecto ---- ', () => {
  expect(capital('---- Perfecto ---- ')).toBe('---- Perfecto ---- ');
});

test('(!@$%^&*<test string>!@$%^&*) is expected to convert to (!@$%^&*<Test string>!@$%^&*) ', () => {
  expect(capital('(!@$%^&*<test string>!@$%^&*) ')).toBe('(!@$%^&*<Test string>!@$%^&*) ');
});

test('(!@$%^&*<Test string>!@$%^&*) remains (!@$%^&*<Test string>!@$%^&*) ', () => {
  expect(capital('(!@$%^&*<Test string>!@$%^&*) ')).toBe('(!@$%^&*<Test string>!@$%^&*) ');
});

test('t-bag is expected to convert to T-bag ', () => {
  expect(capital('t-bag')).toBe('T-bag');
});

test('12345 x 6789 is expected to convert to 12345 X 6789 ', () => {
  expect(capital('12345 x 6789')).toBe('12345 X 6789');
});

test('123#$%t is expected to convert to 123#$%T', () => {
  expect(capital('123#$%t')).toBe('123#$%T');
});