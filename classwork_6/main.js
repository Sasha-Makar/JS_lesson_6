// 1- Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let normalizer = (name)=> {
    return name
        .replaceAll('..', " ")
        .replaceAll('---', ' ')
        .replaceAll('__', ' ');
}
console.log(normalizer(n1));
console.log(normalizer(n2));
console.log(normalizer(n3));

console.log("*****");

// 2- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomizer = (size)=> {
    let arr = [];
    for (let i = 0; i < size; i++){
        arr.push(Math.round(Math.random()* 100))
    }
    return arr;
        };
console.log(randomizer(10));

console.log("*****");


// 3- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortArray = randomizer(10);
sortArray.sort((a, b) => a - b);
console.log(sortArray);
sortArray.sort((a, b) => b - a);
console.log(sortArray);

console.log("*****");


// 4- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let evenNumbers = sortArray.filter(value => value %2 ===0);
console.log(evenNumbers);


// 5- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let strArr = sortArray.map(value => value.toString());
 // OR    let strArr = sortArray.map(value => value + '');
console.log(strArr);


// 6- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11,21,3];
let sortNums = ((direction, array) => {
    if (direction === 'ascending'){
        return array.sort((a, b) => a - b);
    }else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }else {
        return [];
    }
})
console.log(sortNums('ascending', nums));
console.log(sortNums('descending', nums));

console.log("*****");


// 7- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let descendingMonth = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(descendingMonth);

console.log("***");

// 7.2-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let fiveMonth = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(fiveMonth);

console.log("*** THE END ***");