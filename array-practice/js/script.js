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

//fill method
const fillNumber = ["fda", "s", "", "dgfhjsd"];
fillNumber.fill("2sw");
console.log(fillNumber);

//map method
const arr = [2, 3, 4, 5, 6, 7, 8];
const arrMultiple = arr.map((x) => x * 2);
console.log(arrMultiple);

//filter method
const arrFilter = ["dfcgv", "gf", "dfas"];
const arrfiltr = arrFilter.filter((x) => x.length > 2);
console.log(arrfiltr);

//concat method
const arrCon = ["a", "b", "c"];
const arrCon2 = ["d", "f", "g"];
const arrCon3 = arrCon.concat(arrCon2);
console.log(arrCon3);

//flat method
const multiArr = [1, 2, [3, 4]];
const arrMultipleFlat = multiArr.flat();
console.log(arrMultipleFlat);
