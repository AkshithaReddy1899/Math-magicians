import operate from '../logic/operate';

describe('Testing the operate functionality', () => {
  test('test 2 + 2 return 4', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operator = '+';

    expect(operate(numberOne, numberTwo, operator)).toBe('4');
  });

  test('test : 2 - 2 returns 0', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operator = '-';

    expect(operate(numberOne, numberTwo, operator)).toBe('0');
  });

  test('test : 2 x 2 return 4', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operator = 'x';

    expect(operate(numberOne, numberTwo, operator)).toBe('4');
  });

  test('test : 2 ÷ 2 returns 1', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operator = '÷';

    expect(operate(numberOne, numberTwo, operator)).toBe('1');
  });

  test('test : 2 % 2 returns 1', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operator = '%';

    expect(operate(numberOne, numberTwo, operator)).toBe('0');
  });

  test('test : 4 ÷ 0 throws an exception', () => {
    const numberOne = 4;
    const numberTwo = 0;
    const operator = '÷';

    expect(operate(numberOne, numberTwo, operator)).toBe("Can't divide by 0.");
  });
});
