//                     Текст задания 1
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

const obj = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота",
    7: "Воскресенье"
};

console.log(obj[2]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.

const user = {
    'name' : 'Viki', 
    'surname' : 'Serg', 
    'age' : '12'
};

console.log(user.name + '-' + user.surname + '-' + user.age);

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры

const user1 = {
    'name' : 'Viki', 
    'surname' : 'Serg', 
    'age' : '12'
};

user1.fatherName = prompt('Enter fathername');

console.log(user1.name + '-' + user1.surname + '-' + user1.age + '-' + user1.fatherName);

// 4. Удалите свойство surname

const user2 = {
    'name' : 'Viki', 
    'surname' : 'Serg', 
    'age' : '12'
};

delete user2.surname;

console.log(user2.name + '-' + user2.surname + '-' + user2.age);

// Viki-undefined-12


//                     Текст задания 2
// 1. Даны два массива: первый с названиями дней недели, а второй - с
//      их порядковыми номерами:
//      const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//      const arr2 = [1, 2, 3, 4, 5, 6, 7];
//      С помощью цикла создайте объект, ключами которого будут
//      названия дней, а значениями - их номера.

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = {};
for (let i = 0; i < arr1.length; i++) {
    arr3[arr1[i]] = arr2[i];
}
console.log(arr3);

// 2. const obj = {x: 1, y: 2, z: 3};
//      Переберите этот объект циклом и возведите каждый элемент
//      этого объекта в квадрат.

const objj = {x: 1, y: 2, z: 3};
Object.values(objj).map(function (value) {
    console.log(value * value);
});

//                     Текст задания 3
// const obj = {
//     key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//     },
//     key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//     },
//     key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//     },
//     }
//     Найдите сумму элементов приведенного объекта.

const object = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sum = 0;
Object.values(object).map(function (value) {
    Object.values(value).map(function (value) {
        sum = sum + value;
    });
});

console.log(sum);


//                     Текст задания 4
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    question: 'Who are you?',
    answer: 'Viki',
    counter: 0,
    askQuestion: function () {
        let enteredAnswer = prompt(this.question);
        if (enteredAnswer === this.answer) {
            console.log('fine');
        } else {
            console.log('вы проиграли');
            this.counter++;
            if (this.counter < 3){
                this.askQuestion();
            }
        }
    }
};

riddles.askQuestion();