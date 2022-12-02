
const ceasarCipher = require('../cipher');
test('abc is expected to result to bcd', () => {
    expect(ceasarCipher('abc',1)).toBe('bcd');
  });

  test('abc (shifted by 5) is expected to result to fgh', () => {
    expect(ceasarCipher('abc',5)).toBe('fgh');
  });

  test('abc (shifted by 10) is expected to result to klm', () => {
    expect(ceasarCipher('abc',10)).toBe('klm');
  });

  test('abc (shifted by 25) is expected to result to zab', () => {
    expect(ceasarCipher('abc',25)).toBe('zab');
  });

  test('aBwZ is expected to be bCxA',()=>{
    expect(ceasarCipher('aBwZ',1)).toBe('bCxA');
  })

  test('aBwZ (shifted by 5) is expected to be fGbE',()=>{
    expect(ceasarCipher('aBwZ',5)).toBe('fGbE');
  })

  test('aBwZ (shifted by 10) is expected to be kLgJ',()=>{
    expect(ceasarCipher('aBwZ',10)).toBe('kLgJ');
  })

  test('aBwZ (shifted by 10) is expected to be pQlO',()=>{
    expect(ceasarCipher('aBwZ',15)).toBe('pQlO');
  })

  test('aBwZ (shifted by 22) is expected to be wXsV',()=>{
    expect(ceasarCipher('aBwZ',22)).toBe('wXsV');
  })

  test('attack at dawn is expected to result to buubdl bu ebxo', () => {
    expect(ceasarCipher('attack at dawn',1)).toBe('buubdl bu ebxo');
  });

  test('attack at dawn (shifted by 5) is expected to result to fyyfhp fy ifbs', () => {
    expect(ceasarCipher('attack at dawn',5)).toBe('fyyfhp fy ifbs');
  });

  test('attack at dawn (shifted by 10) is expected to result to kddkmu kd nkgx', () => {
    expect(ceasarCipher('attack at dawn',10)).toBe('kddkmu kd nkgx');
  });

  test('attack at dawn (shifted by 19) is expected to result to tmmtvd tm wtpg', () => {
    expect(ceasarCipher('attack at dawn',19)).toBe('tmmtvd tm wtpg');
  });

  test('!!!Project: Virtual-Library!!! is expected to result to !!!Qspkfdu: Wjsuvbm-Mjcsbsz!!!', () => {
    expect(ceasarCipher('!!!Project: Virtual-Library!!!',1)).toBe('!!!Qspkfdu: Wjsuvbm-Mjcsbsz!!!');
  });

  test('!!!Project: Virtual-Library!!! (shifted by 5) is expected to result to !!!Uwtojhy: Anwyzfq-Qngwfwd!!!', () => {
    expect(ceasarCipher('!!!Project: Virtual-Library!!!',5)).toBe('!!!Uwtojhy: Anwyzfq-Qngwfwd!!!');
  });

  test('!!!Project: Virtual-Library!!! (shifted by 10) is expected to result to !!!Zbytomd: Fsbdekv-Vslbkbi!!!', () => {
    expect(ceasarCipher('!!!Project: Virtual-Library!!!',10)).toBe('!!!Zbytomd: Fsbdekv-Vslbkbi!!!');
  });

  test('!!!Project: Virtual-Library!!! (shifted by 18) is expected to result to !!!Hjgbwul: Najlmsd-Datjsjq!!!', () => {
    expect(ceasarCipher('!!!Project: Virtual-Library!!!',18)).toBe('!!!Hjgbwul: Najlmsd-Datjsjq!!!');
  });

  test('!!!Project: Virtual-Library!!! (shifted by 25) is expected to result to !!!Oqnidbs: Uhqstzk-Khaqzqx!!!', () => {
    expect(ceasarCipher('!!!Project: Virtual-Library!!!',25)).toBe('!!!Oqnidbs: Uhqstzk-Khaqzqx!!!');
  });