// 1- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// function cutString (str,n){
//
// }

let cutString = (str, n) => {
    let newArr = [];
    while (str.length) {
        newArr.push(str.substring(0, n))
        str = str.slice(n)
    }
    console.log(newArr)
    return newArr
};
document.write(cutString('наслаждение',3),'<br/>');
document.write(cutString('фазово-контрастна мікроскопія', 3),'<br/> <hr/>');

console.log("*****");


// 2- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива
// до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

let validate = ((email)=> {
 if (email !== '' && email.includes('@') && email.indexOf('.') >= email.indexOf('@') + 1){
    return email;
} else {
     return 'not valid email';
  }
});
console.log(validate('someemail@gmail.com'));
console.log(validate('someeMAIL@gmail.com'));
console.log(validate('someeMAIL@i.ua'));
console.log(validate('some.email@gmail.com'));
console.log(validate(''));

console.log("*****");


// 3- є масив coursesArray --  відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let newCoursesArr = coursesArray.sort((a,b) => b.modules.length - a.modules.length);
console.log(newCoursesArr);

console.log('*****');


// 4- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let symb = "о";
str = "Астрономия это наука о небесных объектах";

let counter = (str, stringsearch) => {
    let count = 0;
    let newArr = str.split('');
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === stringsearch) {
            count++;
        }
    }
    return count;
}
document.write(counter(str, symb), '<br/> <hr/>');
console.log(counter(str, symb));

console.log('*****');


// 5- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'//

let cutString1 = (str, n) => {
    let array = str.split(" ");
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(array[i]);
    }
    return newArr.join(' ');
}
let string = "Сила тяжести приложена к центру масс тела";
document.write(cutString1(string, 5), '<br/><hr/>');
console.log(cutString1(string, 5));

console.log("*** THE END ***");
document.write("*** THE END ***");