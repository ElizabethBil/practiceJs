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


const users = ["Mango", "Poly", "Ajax"];

function logItem(array) {
    for (let i = 0; i <= users.length; i++) {
        console.log("index", i);
        console.log("value", users[i])
        console.log(i, users[i])
    }
}

logItem()