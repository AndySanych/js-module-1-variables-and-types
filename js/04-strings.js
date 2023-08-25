/*
 * Длина строки, свойство length
 */

const message = 'В этой строке 26 символов.';

// console.log(message.length);
/*
 * Конкатенация строк
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';

const fullName = firstName + ' ' + lastName;
// console.log(fullName);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */

const room = 715;
const type = 'VIP';

// Вариант 1 - не удобно и не практично!
// const welcomeMsg =
//   'Гость ' + fullName + ' поселяется в ' + type + ' номер ' + room;

// Вариант 2 - шаблонные строки - супер!
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

// console.log(welcomeMsg);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

// console.log(orderMsg);

/*
 * Нормализация с методом toLowerCase()
 */

// Вариант 1
// const brand = 'Samsung';
// const normalizedBrand = brand.toLowerCase();

// console.log(normalizedBrand)

// Вариант 1
let brand = 'Samsung';
brand = brand.toLowerCase();

console.log(brand)

/*
 * Поиск в строке с методом includes()
 */
