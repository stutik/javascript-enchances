'use strict';

const bookings = [];

const flight = function (flightName, flightNumber = 1, price = 211) {
  const booking = {
    flightName,
    flightNumber,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
flight('LHS210');

const high5 = function () {
  console.log('high');
};

document.body.addEventListener('click', high5);

var name12 = 'stuti';
console.log(name12);

var name2 = 2 < 20;
console.log(name2);

const hash = 'hash';
console.log(hash);

//callback funct

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeter = greet('hey');
// greeter('jonas');
// greeter('vbn');

const greet = greeting => name1 => console.log(`${greeting} ${name1}`);
greet('stu54g')('fvhgj');

const airAsia = {
  airline: 'air aisa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengers) {
    console.log(
      `${passengers} your flight ${this.airline} and ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, passengers });
  },
};
airAsia.book(123, 'stuti');
console.log(airAsia);

const book = airAsia.book;
book.call(airAsia, 12, 'dfdw1');
console.log(airAsia);
const swiss = [123432, 'dev.azure'];
book.apply(airAsia, swiss);
console.log(swiss);
console.log(airAsia);
book.call(airAsia, ...swiss);
console.log(swiss);

const euroEW = book.bind(airAsia);
euroEW(23, 'kesh123');

document.querySelector('.buy').addEventListener('click', airAsia.bookings);

//partial app
const addTax = (value, rate) => value + value * rate;
console.log(addTax(0.1, 40));

const addVAT = addTax.bind(null, 1.23);
console.log(addVAT(100));

//function in function

const greets = function (greetig) {
  return function (message) {
    console.log(`${message} ${greetig}`);
  };
};
const message2greet = greets('my message');
console.log(message2greet('qwer'));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

//iife functions
(function () {
  console.log('immediate functions');
})();

(function () {
  console.log('immediate functions2');
})();

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
