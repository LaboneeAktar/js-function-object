/*
//Function declaration
function startFan() {
    console.log("Stand Up");
    console.log("Walk towards the switch");
    console.log("Press the switch");
}
//Call the function
startFan();
console.log("Watch video in YouTube");
startFan();
*/

//...............Parameter..................
/*
//Single parameter
function bringSingara(money) {
    console.log(money);
    console.log('Mama Singara Den');
}
bringSingara(200);
*/

//Multiple Parameter
/*
function add(num1, num2) {
    console.log("Going to add: ", num1, num2);
}
add(200, 149);
*/

/*
function sum(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
    var sum = a + b + c + d + e + f;
    console.log(sum);
}
sum(30, 2, 3, 10, 55, 77);
*/

//.................Return........................
/*
function add(num1, num2) {
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}
var total = add(45, 15);
console.log('Total:', total);
*/

/*
function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var singaras = bringSingara(300); //or I can write (var myTaka = 300; var singaras = bringSingara(myTaka));
console.log('Eating singaras:', singaras);
*/

// ......................Function Example....................
/*
function getAvarage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
var assignment1Marks = 60;
var assignment2Marks = 48;
var assignment3Marks = 60;
var myAverage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('My average Mark is-', myAverage);
*/

//..Add..
function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 14);
const result2 = add(35, 7);
const finalResult = add(result1, result2);
console.log(result1);
console.log(result2);
console.log(finalResult);