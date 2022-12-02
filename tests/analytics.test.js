const analyzeArray = require('../scripts/analytics');
const Stats=analyzeArray([1,8,3,4,2,6])
const Stats2=analyzeArray([55,7,208,-43,523,12])
const Stats3=analyzeArray([88,69,33])
const Stats4=analyzeArray([0,1])

test('Stats of array [1,8,3,4,2,6] are {average:4,min:1,max:8,length:6}', () => {
    expect(JSON.stringify(Stats)).toBe('{"average":4,"min":1,"max":8,"length":6}');
  });

  test('Stats of array [55,7,208,-43,523,12] are {average:762,min:-43,max:523,length:6}', () => {
    expect(JSON.stringify(Stats2)).toBe('{"average":127,"min":-43,"max":523,"length":6}');
  });

  test('Stats of array [88,69,33] are {average:63.333,min:33,max:88,length:3}', () => {
    expect(JSON.stringify(Stats3)).toBe('{"average":63.333,"min":33,"max":88,"length":3}');
  });

  test('Stats of array [0,1] are {average:0.5,min:0,max:1,length:2}', () => {
    expect(JSON.stringify(Stats4)).toBe('{"average":0.5,"min":0,"max":1,"length":2}');
  });