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
