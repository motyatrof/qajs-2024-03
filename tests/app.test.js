import { nameIsValid } from '../src/app.js'
import { fullTrim } from '../src/app.js'
import { getTotal } from '../src/app.js'

describe ('nameIsValid function', () => {
  it ('imports without errors', () => {
    expect(nameIsValid).toBeDefined();
    expect(typeof nameIsValid).toBe('function'); 
  });
  it('name "vasya" is correct', () => {
    expect(nameIsValid("vasya")).toBe(true); 
  });
  it('name "Vasya" is not correct', () => {
    expect(nameIsValid("123")).toBe(false); 
  });
  it('name "123" is not correct', () => {
    expect(nameIsValid("123")).toBe(false); 
  });
  it('name "vasya123" is not correct', () => {
    expect(nameIsValid("123")).toBe(false); 
  });
  it('name "v" is not correct', () => {
    expect(nameIsValid("123")).toBe(false); 
  });
}); 

describe ('fullTrim function', () => {
  it ('imports without errors', () => {
    expect(fullTrim).toBeDefined();
    expect(typeof fullTrim).toBe('function'); 
  });
  it('должен удалить пробелы в начале строки', () => {
    expect(fullTrim(' example@mail.ru')).toBe('example@mail.ru')
  });
  it('должен удалить пробелы в середине строки', () => {
    expect(fullTrim('example@ mail. ru')).toBe('example@mail.ru')
  });
  it('должен удалить пробелы в конце строки', () => {
    expect(fullTrim('example@mail.ru ')).toBe('example@mail.ru')
  });
}); 

describe ('getTotal function', () => {
  it ('imports without errors', () => {
    expect(getTotal).toBeDefined();
    expect(typeof getTotal).toBe('function'); 
  });
  const testCases = [
    [{ items: [{ price: 10, quantity: 10 }], discount: undefined, expectedTotal: 100, errorMessage: undefined }],
    [{ items: [{ price: 10, quantity: 10 }], discount: 10, expectedTotal: 90, errorMessage: undefined }],
    [{ items: [{ price: 10, quantity: 10 }], discount: 'discount', expectedTotal: undefined, errorMessage: 'Скидка должна быть числом' }],
    [{ items: [{ price: 10, quantity: 10 }], discount: -10, expectedTotal: undefined, errorMessage: 'Процент скидки не может быть отрицательным' }],
    [{ items: [{ price: 10, quantity: 10 }], discount: 100, expectedTotal: undefined, errorMessage: 'Процент скидки не может быть больше 100' }],
  ];

  test.each(testCases)(
    'should return %p for items %p and discount %p',
    ({ items, discount, expectedTotal, errorMessage }) => {
      if (errorMessage) {
        expect(() => getTotal(items, discount)).toThrow(errorMessage);
      } else {
        expect(getTotal(items, discount)).toBe(expectedTotal);
      }
    }
  );
});
