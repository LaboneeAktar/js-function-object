//..............Object Declaration..................
/*
var student = {
    id: 11,
    name: 'Roohaniyat',
    age: 22,
    class: 16,
    marks: 95
}

var mobile = {
    brand: 'Xiaomi',
    color: 'Sky Blue',
    price: 15000,
    storage: '32GB',
    camera: '24MP'
}
console.log(student);
console.log(mobile.color);
*/

/*
var shoppingCart = {
    books: 28,
    pen: 20,
    keyboard: 2,
    mouse: 2,
    sunglass: 1
}

//1. When you know the specific property name, use dot notation to get the property value
var penCount = shoppingCart.pen;

// Alternative Way
//2. When you know the specific property name, use dot notation to get the property value
var penCount2 = shoppingCart['pen'];

// Alternative Way
//3. When you know the specific property name, use dot notation to get the property value
var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);

console.log(properties);
console.log(propertyValues);

//1. Set Property value
shoppingCart.mouse = 15;
console.log(shoppingCart);

//2. Set Property value
shoppingCart['mouse'] = 29;

//3. Set Property value
var propertyName = 'books';
shoppingCart[propertyName] = 40;
console.log(shoppingCart);
*/

//................... Object Looping ..........................

//array vs object
var shoppingItems = ['books', 'shoes', 'pen', 'sunglass'];
var age = [12, 13, 25, 77, 90];

var friendAge = {
    rahim: 12,
    karim: 13,
    jamal: 25,
    motin: 77,
    robi: 90
}

var shoppingCart = {
    books: 28,
    pen: 20,
    keyboard: 2,
    mouse: 2,
    sunglass: 1
}

const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);

for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}