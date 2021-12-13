// 1- Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
console.log(string1.length);
let string2 = 'lorem ipsum';
console.log(string2.length);
let string3 = 'javascript is cool';
console.log(string3.length);

console.log("*****");

// 2- Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let upperString1 = string1.toUpperCase();
console.log(upperString1);
let upperString2 = string2.toUpperCase();
console.log(upperString2);
let upperString3 = string3.toUpperCase();
console.log(upperString3);

console.log("*****");


// 3- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(upperString1.toLowerCase());
console.log(upperString2.toLowerCase());
console.log(upperString3.toLowerCase());

console.log("*****");


// 4- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str);
console.log(str.trim());

console.log("*****");


// 5- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';
function stringToArray (arr){
    return arr.split(' ');
}

console.log(stringToArray(str1));

console.log("*****");


// 6- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str,ind)=> {
    return str1.substring(0, ind)
};
console.log(delete_characters(str1,7));
document.writeln(delete_characters(str, 7));

console.log("*****");


// 7- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";
let insert_dash = (str)=> {
   return str.split(' ').join('-').toUpperCase();
   //  OR
   // return str.replaceAll(' ', '-').toUpperCase();
};
console.log(insert_dash(str2));
document.writeln(insert_dash(str2));

console.log("*****");


// 8- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str3 = 'javascript';
let str4 = '';
function register (str) {
    if (!str) return 'STUPID ))))';
        return str[0].toUpperCase() + str.slice(1);
}
console.log(register(str3));
console.log(register(str4));

console.log("*****");


// 9- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str)=> {
    return str.split(' ').map(everyWord => everyWord.charAt(0).toUpperCase() + everyWord.slice(1)).join(' ');
};
console.log(capitalize('hallo okten, javascript is cool'));


console.log('***** THE END *****');