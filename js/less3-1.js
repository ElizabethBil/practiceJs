// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

class User {
    constructor({ username, age, numberOfPosts }) {
    this.username = username, this.age = age, this.numberOfPosts = numberOfPosts
    }
    getInfo = () => {
        return `User ${ this.username } is ${ this.age } years old and has ${ this.numberOfPosts } posts.`
    }
}
const mango = new User({ username: "mango", age: 28, numberOfPosts: 10 })
console.log(mango)