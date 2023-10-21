// // ЗАДАЧА 1
// // НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"

// const name = "ГАЛИНА";
// const age = 35;
// const hobby = "JAVASCRIPT";

// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;

// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ, ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ
// "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt("Please type your name");
// const userEmail = prompt("Please type your e-mail");
// const userTel = prompt("Please type your phone");

// const message = `Користувач ${userName} використовує ${userEmail} почту і ${userTel} телефон`;
// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const TVsum = Number(prompt("Please type TV price"));
// const phone = +prompt("Please type phone price");
// const tablet = +prompt("Please type tablet price");
// const totalPrice = TVsum + phone + tablet;
// console.log(totalPrice);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const year = Number(prompt("Please type mounts in year"));

// if (year === 12) {
//     alert ("correct");
// }

// else {
//     alert ("please correct mouts in year");
// }

// ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО , ЧИ НЕ ПАРНЕ.

// const number = prompt("Type your number");

// if (number % 2 === 0) {
//     alert("true")
// } else {
//     alert("falce")
// }

// const result = number % 2 === 0 ? "true" : "falce";
// alert(result);

// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ, ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ,
//     І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const monthOfBirth = Number(prompt("Please type your month of Birth"));

// if (monthOfBirth === 12 || monthOfBirth === 1 || monthOfBirth === 2) {
//   console.log("You're born in winter");
// } else if (monthOfBirth >= 3 && monthOfBirth <= 5) {
//   console.log("You're born in spring");
// } else if (monthOfBirth >= 6 && monthOfBirth <= 8) {
//   console.log("You're born in summer");
// } else if (monthOfBirth >= 9 && monthOfBirth <= 11) {
//   console.log("You're born in autumn");
// } else {
//   console.log("Invalid data");
// }

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН

// const userLogIn = prompt("Please type your login");
// const correctLogIn = "Serhiy";
// const userPassword = prompt("Please type your password");
// const correctPassword = "123456";
// // if (userLogIn === correctLogIn && userPassword === correctPassword) {
// //   console.log("Hello, Serhiy!");
// // } else {
// //   console.log("invalid login or password!");
// // }
// const allCorrect =
//   userLogIn === correctLogIn && userPassword === correctPassword
//     ? "Hello, Serhiy!"
//     : "invalid login or password!";
// console.log(allCorrect);

// ЗАДАЧА 8
// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99\

// if (period === "ДЕНЬ") {
//     console.log("ціна 1.99");
// } else if (period === "НЕДІЛЯ")  {
// console.log("ціна 5.99");
//     }
// else if (period === "МІСЯЦЬ")  {
//     console.log("ціна 10.99");
// }
// else if (period === "РІК")  {
//     console.log("ціна 100.99");
// }
// else {
//     console.log("please correct subsc.");
// }

// const period = prompt ("Please type period subsc.").toUpperCase();
// switch (period) {
//     case "ДЕНЬ":
//     console.log("ціна 1.99");
//     break;
//     case "НЕДІЛЯ":
//     console.log("ціна 5.99");
//     break;
//     case "МІСЯЦЬ":
//     console.log("ціна 10.99");
//     break;
//     case "РІК":
//     console.log("ціна 100.99");
//     break;
//     default: console.log("please correct subsc.");
//     break;
// }

// ЗАДАЧА 9
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10

// const min = 1;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 10 === 0) {
// console.log(i);
//   }
// continue
// }

// ЗАДАЧА 10
// ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!",
// ЯКЩО МЕНШЕ 7
// "Your name isn't very long"

const userName = "Tetiana";

if (userName.length > 7) {
  console.log("Wow, you  have a REALLY long name!");
} else {
  console.log("Your name isn't very long");
}
