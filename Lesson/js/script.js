// ----------------------------------//
// ----------------------------------//
// Вивід данних/ Ввід данних
// ----------------------------------//
// ----------------------------------//

// const message = "JavaScript is awesome!";

// Виведення

// alert(message);
// console.log(message);

// Отримання

// confirm
// const isConfirm = confirm("Please go again");
// console.log(isConfirm)


// const test = confirm("YES or NO");
// console.log(isConfirm)

// const test = confirm("Yes or no?");
// console.log(test);

// prompt
// const userName = prompt("Please enter your name");
// console.log(userName);

// const number = prompt("Please enter your phone number");
// console.log(number);

// ----------------------------------//
// ----------------------------------//
// Перетворення типу
// ----------------------------------//
// ----------------------------------//

// const value = prompt("Please enter a number!");
// console.log(typeof value); // 'string'
// console.log(value); // '5'

// const value = prompt("Pease ennter your age");
// console.log(typeof value);
// console.log(value);
// let value;

// ---String--- //

// let value;
// console.log(value);
// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue)

// ---Number--- //

// value = "123";
// console.log(typeof value);

// const newValue = Number(value);
// console.log(typeof newValue);

// const test = Number("qwerty")
// console.log(test)


// ---Boolean--- //

// Правила перетворення:

// Значення, які інтуїтивно “порожні”, такі як 0,
// порожній рядок, null, undefined та NaN, стають false.
// Інші значення стають true.

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false

// console.log(Boolean("вітаю")); // true
// console.log(Boolean("")); // false

// console.log(Boolean(NaN));
// console.log(Boolean(null));

// ----------------------------------//
// ----------------------------------//
// Оператори
// ----------------------------------//
// ----------------------------------//

//Терміни: “унарний”, “бінарний”, “операнд”

//Операнд – це те, до чого застосовуються оператори.
//Наприклад, у множенні 5 * 2 є два операнди: лівий операнд 5 і правий операнд 2.
//Іноді їх називають “аргументами”

//Оператор є унарним, якщо він має один операнд
//let x = 1;

//x = -x;

//Оператор є бінарним, якщо він має два операнди

// let x = 1, y = 3;
// alert( y - x );

//JavaScript підтримує такі математичні операції:

// Додавання +,
// Віднімання -,
// Множення *,
// Ділення /,
// Остача від ділення %,
// Піднесення до степеня **.

// // // Додавання
// console.log(9 + 1);

// // //  Віднімання
// console.log(9 - 1);

// // //  Множення
// console.log(9 * 1);

// // //  Ділення
// console.log(9 / 1);


//Остача від ділення %
// console.log(8 % 3);

// //Піднесення до степеня **
// console.log(5**2);



// -------Оператори порівняння------//

// результатом вертають буль

// a > b и a < b //- більше/меньше
// a >= b и a <= b  //- більше/меньше або дорівнює
// a == b //- дорівнює
// a != b //- не дорівнює
// a === b //- строго дорівнює
// a !== b //- строго не дорівнює


// == приведення до типу

// or -and -not //


//   -----and (&&)------  //

// console.log(5 === 5 && 6 > 4);
// console.log(5 !== 3 && 8 > 9);

//   -----or (||)------ //

// console.log(5 * 4 === 25 || 3 * 2 === 6);

//   -----not (!) ------ //

// console.log(!true);

// ----------------------------------//
// ----------------------------------//
// Умови if/else
// ----------------------------------//
// ----------------------------------//

//--- одинарні
// if (5 * 5 === 25) {
//     console.log("Hello")
// } else {
//     console.log("No Hello")
// }

// if (3 * 3 === 20) {
//     console.log("Hey")
// } else {
//     console.log("Cancell")
// }

/// ------Тернарний оператор------///

// (2 + 2 === 5) ? console.log("1") : console.log("2")
// (5 * 5 === 25) ? console.log(true) : console.log(false)


// if (5 + 5 === 10) {
//     console.log("5 + 5 === 10")
// } else if (2 + 2 === 4) {
//     console.log("2 + 2 === 4")
// } else {
//     console.log(no)
// }


// let leng = "pl"

// if (leng === "ua") {
//     console.log("Понеділок")
// } else if (leng === "en") {
//     console.log("Monday")
// } else {console.log("Reset")}

// ----------------------------------//
// ----------------------------------//
// switch/case
// ----------------------------------//
// ----------------------------------//

// let num = 1;

// switch (num) {
//     case 0:
//         console.log("0");
//         break;
    
//     case 5:
//         console.log("5");
//         break;
    
//     case 10:
//         console.log("10");
//         break;
// }

 
// let cost;
// const sub = "premium";

// switch (sub) {
//     case 'free':
//         cost = 0;
//         break;
    
//     case 'pro':
//         cost = 100;
//         break;
    
//     case 'premium':
//         cost = 500;
//         break;
    
//     default : console.log("Invalid sub")
    
// }

// console.log(cost)


// ----------------------------------//
// ----------------------------------//
// Вирішення логічних задач та побудова алгоритмів
// ----------------------------------//
// ----------------------------------//

// const min = prompt("Enter a minute");
// if (min >= 0 && min <= 14) {
//     console.log("First")
// } else if (min >= 15 && min <= 29) {
//     console.log("Second")
// } else if (min >= 30 && min <= 44) {
//     console.log("Third")
// } else if (min >= 45 && min <= 59) {
//     console.log("Fourth")
// } else {
//     console.log("Enter other number")
// }


// const value = prompt("Enter the name of the product").toLowerCase();
// let cost;

// switch (value) {
//     case 'apple':
//         cost = 10;
//         alert(`${value} is costs ${cost}`)
//         break;
//      case 'grape':
//         cost = 30;
//         alert(`${value} is costs ${cost}`)
//         break;
//      case 'cherry':
//         cost = 50;
//         alert(`${value} is costs ${cost}`)
//         break;
//      case 'lemon':
//         cost = 25;
//         alert(`${value} is costs ${cost}`)
//         break;
//      case 'watermelon':
//         cost = 70;
//         alert(`${value} is costs ${cost}`)
//         break;
//     case 'melon':
//         cost = 60;
//         alert(`${value} is costs ${cost}`)
//         break;
    
//     default:
//         alert(`Product ${value} haven't`);
// }



