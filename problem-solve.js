/*
1) Write a function called foo() which prints “foo” and a function called bar() which prints
“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
the foo() to see the output.

//.......Problem 1...........
function foo() {
    console.log('Foo');
    bar();
}
function bar() {
    console.log('Bar');
}
foo();
*/

/*
2) Write a function called make_avg() which will take an three integers and return the
average of those values.

//.............Problem 2...........
function make_avg(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    return average;
}
const averageMarks = make_avg(20, 30, 40);
console.log(averageMarks);
*/


/*
3) Write a function called make_avg() which will take an array of integers and
the size of that array and return the average of those values.

//...... Problem 3..............
function avg_mark(numbers) {
    let average = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        average = average + element;
    }
    average = average / numbers.length;
    return average;
}
const numbers = [8, 2, 14];
const average = avg_mark(numbers);
console.log(average);
*/


/*
4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter

//.............Problem 4............
//1
function isEvenOrOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let givenNumber = 169;
let checkEvenOdd = isEvenOrOdd(givenNumber);
console.log(checkEvenOdd);

//2
function odd_even(number) {
    if (number % 2 == 0) {
        console.log('This is even number');
    }
    else {
        console.log('This is odd number');
    }
}
odd_even(55);
*/

/*
5) You are in a hurry to go to your school on time. But when you are crossing the road, the
traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
coloured traffic signal, you should cross the road. So write a JS code, where there is a
variable called signal. Its value can be green, yellow or red & we will get different activities as
output depending on the variable. So, hurry up.

//..............Problem 5......................
// Use if else

var signal = 'red';
if (signal == 'yellow') {
    console.log('You should stop.');
}
else if (signal == 'red') {
    console.log('If you try to cross the road, you may be in danger.');
}
else if (signal == 'green') {
    console.log('You should cross the road.');
}
else {
    console.log('Muri kine kha');
}


// Use switch case
var signal = '';

switch (signal) {
    case 'yellow':
        console.log('You should stop.');
        break;
    case 'green':
        console.log('You should cross the road.');
        break;
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;
    default:
        console.log('Muri kine khabo');
}
*/


//Extra প্রাকটিস চ্যালেঞ্জ (৪ টি প্রব্লেম):


// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

/*function multiplication(number) {
    for (let i = 1; i <= 10; i++) {
        var result = i * number;
        // console.log(result);
        console.log(`${number} * ${i} = ${result}`);
    }
}
multiplication(13);
*/

//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

/*
function showName(name) {
    return name.toLowerCase();
    // return name.toUpperCase();
}
const userInput = 'BlackPiNK';
const lowercaseName = showName(userInput);
console.log(lowercaseName);
*/

//৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

/*
function fullName(first, last) {
    var showfullName = first + ' ' + last;
    return showfullName;
}
const showfullName = fullName('Hablu', 'Kanto');
console.log(showfullName);
*/

/*
//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
//1
function square(number) {
    var squareNumber = number * number;
    console.log(squareNumber);
}
square(5);

//2
function square1(number1) {
    var squareNumber1 = number1 * number1;
    return squareNumber1;
}
const showSquareNumber = square1(5);
*/

//৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : এবং pepperoni প্রিন্ট করবা।

const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

}
console.log(pizza.toppings[2]);
