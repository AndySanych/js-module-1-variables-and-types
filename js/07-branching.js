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

// const balance = 1000;
// let message;

// if(balance >= 0) {
//     message ='Позитивный баланс'
// } else {
//     message ='Негативный баланс'
// }
// console.log(message)

// const message = условие ? выражение1 : выражение1;
// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

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

// if (true) {
//   const a = 5;
//   console.log(b); // ошибка! is not defined. Вне области видимости
// }

// if (true) {
//   const b = 10;

//   console.log(a); // ошибка! is not defined. Вне области видимости
// }

/*
 * Практика
 */

/*
 * Напиши скрипт обработки покупки в магазине.
 *
 * - Баланс пользователя хранится в переменной balance
 * - Сумма покупки хранится в переменной payment
 *
 * - Перед проверкой вывести сообщение:
 * «Общая стоимость заказа [число] кредитов. Проверяем кол-во доступных средств на счету»
 *
 * - Если сумма покупки не превышает баланс:
 *    - Вычесть из баланса сумму покупки
 *    - Вывести сообщение «На счету осталось [число] кредитов»
 * - Если сумма покупки превышает баланс:
 *    - Вывести сообщение «На счету недостаточно средств для проведения операции!»
 * - В конце вывести сообщение «Операция завершена»
 */

// let balance = 1000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
// );

// if (payment <= balance) {
//   balance -= payment;
//   // balance = balance - payment //  то же самое

//   console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//   console.log(`На счету осталось ${balance} кредитов»`);
// } else {
//   console.log('На счету недостаточно средств для проведения операции!');
// }
// console.log('Операция завершена')

/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

let totalSpent = 11;
let payment = 500;
let discount = 0;

if (totalSpent > 100 && totalSpent < 1000) {
  discount = 0.02;

  console.log(`Бронзовый партнер, скидка ${discount * 100}%`);
} else if (totalSpent > 1000 && totalSpent < 5000) {
  discount = 0.05;

  console.log(`Серебрянный партнер, скидка ${discount * 100}%`);
} else if (totalSpent > 5000) {
  discount = 0.1;

  console.log(`Золотой партнер, скидка ${discount * 100}%`);
} else {
  console.log('У вас еще нет партнерской скидки');
}

payment -= payment * discount;

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

totalSpent += payment;

console.log(`Общая сумма потраченого в магазине: ${totalSpent}`);
// 'Бронзовый партнер, скидка 2%'
// 'Серебрянный партнер, скидка 5%'
// 'Золотой партнер, скидка 10%'
// 'У вас еще нет партнерской скидки'
