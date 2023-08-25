/*
 * Оператор ветвеления if
 */

// if (0) {
//   //тело
//   console.log('Hello!');
// }
// console.log('Дальше');

/*
 * Оператор ветвления if...else
 */

// if (50 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

const salary = 5000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary <= 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }
// console.log('first');

/*
 * Тернарный оператор
 */

const balance = 1000;
// let message;

// if(balance >= 0) {
//     message ='Позитивный баланс'
// } else {
//     message ='Негативный баланс'
// }
// console.log(message)

// const message = условие ? выражение1 : выражение1;
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

/*
 * Блочная область видимости переменных
 */

// const b = 5; // глобальная область видимости

// if (true) {
//   console.log(b);

//   const a = 10; // блочная область видимости

//   console.log(a); // в блоке if отработает
// }

// console.log(b);
// console.log(a); // ошибка переменная "а" объявленна не в глобальной области видимости

if (true) {
  const a = 5;
  console.log(b); // ошибка! Вне области видимости
}

if (true) {
  const b = 10;

  console.log(a); // ошибка! Вне области видимости
}
