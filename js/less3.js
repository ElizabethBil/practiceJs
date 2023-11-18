// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек , який приймає імя і логінує в консоль рядок  "Привіт" + імя


// function letMeSeeYourName(callback) {
//     const name = prompt("Input your name:");
//     callback(name)
// }

// function greet(name) {
//     console.log(`Hallo, ${name}`)
// }

// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару, добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
// makeProduct("Холодильник", 10000, logger);

function makeProduct(name, price, callback) {
    const products = { name, price, id: Date.now() }
    callback(products)
}

function showProduct(products) {
    console.log(products)
}

// makeProduct("Холодильник", 10000, showProduct);

makeProduct("Телевізор", 10000, showProduct);
