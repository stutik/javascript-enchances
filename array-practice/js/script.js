"use strict";

//push method
const addFruits = ["apple", "banana", "kiwi"];
addFruits.push("orange");
console.log(addFruits);

//unshift method
const addFruits2 = ["apple", "banana", "kiwi"];
addFruits2.unshift("orange");
console.log(addFruits2);

//pop method
const deleteFruits = ["apple", "banana", "kiwi"];
deleteFruits.pop();
console.log(deleteFruits);

//shift method
const deleteFruits2 = ["apple", "banana", "kiwi"];
deleteFruits2.shift();
console.log(deleteFruits2);

//splice method
const cutElement = ["sfgh", "tgdg", "ydfgd", "ertrt", "kesharwani"];
//cutElement.splice(1, 3); //tut
cutElement.slice(1, 3);
console.log(cutElement);

//reverse method
const reverSeElement = ["c", "b", "a"];
reverSeElement.reverse();
console.log(reverSeElement);

//sort method
const sortNumber = ["dhgsfd", "wesd", "ytryu"];
sortNumber.sort();
console.log(sortNumber);
