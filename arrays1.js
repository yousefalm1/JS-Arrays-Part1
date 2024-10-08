// 1 Create an array and name it groceries, add 6 groceries to it
const groceries = ["Milk", "Eggs", "Bread", "Orange", "Apples", "Cheese"];

// 2 Print the second element from the array groceries
console.log(groceries[1]);

// 3 Print how many elements are in the array (i.e length of the array)

console.log(groceries.length);

// 4 Print the last element in the array
const lastEl = groceries.slice(5, 6);

console.log(lastEl);

// 5 Remove the last element from the array and print it

const removeLastEl = groceries.pop();

console.log(groceries);

// 6 Add two new and different elements to the end of the array

const addTwoGrocery = groceries.push("Chocolate", "Candy");

console.log(groceries);

// 7 Create a new array named firstThreeItems and it’s elements are the first three elements from the groceries array.

const firstThreeItems = groceries.slice(0, 3);

console.log(firstThreeItems);

// Challenge

// 1 Delete the 3rd element in the array

const DeleteThirdEl = groceries.splice(2, 1);

console.log(groceries);

// 2 Insert a new element at the beginning of the array

const addNewEl = groceries.unshift("Chicken");

console.log(groceries);

// 3 Remove the first two elements and replace them with “ketchup” and “chili”

const RemoveAndAddTwoEl = groceries.splice(0, 2, "Ketchup", "Chilli");

console.log(groceries);
