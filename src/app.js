/**
 * Проверка имени пользователя
 * @param {string} name
 * @returns {boolean}
 */

export const nameIsValid = (name) =>
  !!name && name.length >= 2 && /^[a-z]+$/.test(name);

/**
 * Удаление пробелов из строки
 *
 * @param {string} text
 * @returns {string}
 */

export const fullTrim = (text) => (text || "").replace(/\s/g, "");

/**
 * Подсчёт суммы заказа
 *
 * @param {[{quantity: number, name?: string, price: number}]} items
 * @param {number} discount
 * @example getTotal([{ price: 10, quantity: 10 }]) // 100
 * @example getTotal([{ price: 10, quantity: 1 }]) // 10
 * @example getTotal([{ price: 10, quantity: 1 }, { price: 10, quantity: 9 }]) // 100
 * @example getTotal([{ price: 10, quantity: 0 }], { price: 10, quantity: 9 }) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 10) // 90
 * @example getTotal([{ price: 10, quantity: 10 }], 100) // 0
 */
export const getTotal = (items = [], discount = 0) => {
  if (typeof discount !== "number") {
    throw new Error("Скидка должна быть числом");
  }
  if (discount < 0) {
    throw new Error("Процент скидки не может быть отрицательным");
  }
  if (discount >= 100) {
    throw new Error("Процент скидки не может быть больше 100");
  }

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return total - (total * discount) / 100;
};


// функция getScore
function getScores(scores) {
  let totalScore = 0;
  for (let key in scores) {
    totalScore += scores[key];
  }
  return totalScore; 

  let scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  let total = getScore(scores);
  console.log('Общая успеваемость:, total');
  
}
getScore(scores);



