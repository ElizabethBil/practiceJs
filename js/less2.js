// ЗАДАЧА 1
// БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
// 1)створіть масив styles з елементами «Джаз» і «Блюз»
// 2)добавте «Рок-н-ролл» в кінець
// 3)замініть значення в середині на «Классика»
// 4)видаліть перший елемент і виведіть його в консоль
// 5)вставте «Рэп» і «Регги» на початок масиву

// МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// // Джаз, Блюз
// // Джаз, Блюз, Рок-н-ролл
// // Джаз, Классика, Рок-н-ролл
// // Классика, Рок-н-ролл
// // Рэп, Регги, Классика, Рок-н-ролл

// const styles = ["Джаз", "Блюз"];
// console.log(styles);

// styles.push("Рок-н-ролл");
// console.log(styles);

// styles.splice(1, 1, "Классика");
// console.log(styles);

// // styles[1] = "Классика";
// const deleteStyles = styles.shift();
// console.log(deleteStyles);
// console.log(styles);

// styles.unshift("Рэп", "Регги");
// console.log(styles);

// ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for , який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
// const users = ['Mango', 'Poly', 'Ajax']
// function logItems(array) {
//     for (let i = 0; i < users.length; i++) {
//         console.log("index", i)
//         console.log("value", users[i])
//         console.log(i, users[i])
//     }
// }
// logItems()

// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// function findSmallestNumber(numbers) {
//   let smallestNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }
//   return smallestNumber;
// }

//  Провірте , чи являється рядок полідромом
// const str = "ротатор"; //true
// const newString = "Hello"; //false

// const newStr = str.split("").reverse().join("");
// console.log(str === newStr);

// const newStr2 = newString.split("").reverse().join("");
// console.log(newStr2 === newString);

// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36));// 23.2

// function calculateAverage() {
//     console.log(arguments)
//     const numbers = Array.from(arguments);
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return (total / numbers.length).toFixed(1);
// }

// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".
// У випадку , відсутнього
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь")); //Привіт Василь
// console.log(greet()); //Привіт гість

// function greet(name = "гість") {
//   return `Привіт, ${name}`;
// }

// Напишіть ф-цію capitalize , яка буде приймати рядок і буде повертати новий рядок , де кожне слово буде з великої букви
// console.log(capitalize("the quick brown fox")); // 'The Quick Brown Fox '
// function capitalize(string) {
//   let newStr = string.split(" ");
//   let newString = [];
//   for (let word of newStr) {
//     let newWord = word[0].toUpperCase();
//     let newReset = word.slice(1);
//     let finalString = `${newWord}${newReset}`;
//     newString.push(finalString);
//   }
//   return newString.join(" ");
// }
