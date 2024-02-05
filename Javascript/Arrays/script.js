const fruits = [
    ['apple', 'banana', 'cherry'],
    ['orange', 'grape', 'kiwi'],
    ['mango', 'pear', 'pineapple'],
    ['strawberry', 'watermelon', 'blueberry'],
    ['raspberry', 'peach', 'plum'],
    ['lemon', 'lime', 'coconut'],
    ['fig', 'pomegranate', 'apricot'],
    ['melon', 'guava', 'dragonfruit'],
    ['blackberry', 'kiwifruit', 'persimmon'],
    ['avocado', 'papaya', 'passion fruit']
];

const cars = new Array(3);
cars[0] = ['BMW', 'Audi', 'Mercedes'];
cars[1] = ['Toyota', 'Honda', 'Nissan'];
cars[2] = ['Ford', 'Chevrolet', 'Jeep'];

const person = ['John', 'Doe', 46,];
const person1 = {firstName: 'John', lastName: 'Doe', age: 46};
const fruitsLength = fruits.length;


console.log(fruits[0][0]); // apple
console.log(fruits[0][1]); // banana

console.log(cars[0][0]); // BMW
console.log(cars[1][1]); // Honda

document.querySelector('.demo').innerHTML = fruits[0][0] + '<br>' + fruits[0][1] + '<br>';
document.querySelector('.demo').innerHTML += cars[0].toString() + '<br>';
document.querySelector('.demo').innerHTML += fruitsLength;

console.log(person1.firstName); // John
console.log(person1['lastName']); // Doe
console.log(person1.age); // 46

cars[0] = person1;
console.log(cars[0]['firstName']); 

let flen = fruits[0].length;

let text = '<ul>';
for (let i = 0; i < flen; i++) {
    text += '<li>' + fruits[0][i] + '</li>';
}

text += '</ul>';
document.querySelector('.demo').innerHTML += text;

let box = '<div class="boxs">';
for (let i = 0; i < flen; i++) {
    box += '<div class=lists>' + cars[0][i] + '</div>';
}
box += '</div>';

document.querySelector('.demo').innerHTML += box;

const fruits1 = ['apple', 'banana', 'cherry'];

let text1 = '<ul>';
fruits1.forEach(myFunction);
text1 += '</ul>';

function myFunction(value) {
    text1 += '<li>' + value + '</li>';
}

document.querySelector('.demo').innerHTML += text1;


test = fruits1.forEach(myFunction2);

function myFunction2(value) {
    value = value 
}

document.querySelector('.demo').innerHTML += test;







