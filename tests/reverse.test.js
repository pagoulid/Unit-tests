reverse= require('../reverse');

test('mario  is expected to convert to oiram', () => {
  expect(reverse('mario')).toBe('oiram');
});

test('parmezana  is expected to convert to anazemrap', () => {
    expect(reverse('parmezana')).toBe('anazemrap');
  });

test('A beautiful day  is expected to convert to yad lufituaeb A', () => {
    expect(reverse('A beautiful day')).toBe('yad lufituaeb A');
  });

test('abba  is expected to convert to abba', () => {
    expect(reverse('abba')).toBe('abba');
  });

  test('kayak  is expected to convert to kayak', () => {
    expect(reverse('kayak')).toBe('kayak');
  });

  test('itopinonavevanonipoti  is expected to convert to itopinonavevanonipoti', () => {
    expect(reverse('itopinonavevanonipoti')).toBe('itopinonavevanonipoti');
  });