import calculate from '../logic/calculate';

describe('Testing for buttons', () => {
  test('Test for AC button', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: null,
    };
    const result = calculate(obj, 'AC');
    expect(result.total).toBe(null);
  });

  test('Test for +/- button', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: '-',
    };
    const result = calculate(obj, '+/-');
    expect(result.total).toBe(1);
  });

  test('Test for % button', () => {
    const obj = {
      total: 10,
      next: 2,
      operation: '%',
    };
    const result = calculate(obj, '%');
    expect(result.total).toBe('0');
  });

  test('Test for ÷ button', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: null,
    };
    const result = calculate(obj, '÷');
    expect(result.total).toBe(2);
  });

  test('Test for X button', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: 'x',
    };
    const result = calculate(obj, 'x');
    expect(parseInt(result.total)).toBe(2);
  })

  test('Test for - button', () => {
    const obj = {
      total: 2,
      next: 1,
      operation: '-',
    };
    const result = calculate(obj, '-');
    expect(parseInt(result.total)).toBe(1);
  });
  
  test('Test for + button', () => {
    const obj = {
      total: 1,
      next: 2,
      operation: '+',
    };
    const result = calculate(obj, '+');
    expect(parseInt(result.total)).toBe(3);
  });
})