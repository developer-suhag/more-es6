// old way

const numbers = [4, 6, 8, 10];
const output2 = []


// function doubleIt(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    // const result = number * 2;
    const result = doubleIt(number)
    output2.push(result)
}
// console.log(output2);

// map 
/* map working steps */
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt)
// const output = numbers.map(number => number * 2)

const output = numbers.map(x => x * 2);

const square = numbers.map(y => y * y);

const divide = numbers.map(a => a / 2);

// console.log(output);
// console.log(square);
// console.log(divide);

const friends = ['Amran', 'Sakib', 'Selim', 'Sohan', 'Din Islam', 'Tisha', 'Jasy', 'Sanji', 'Nite'];

const output3 = friends.map(x => x + ' Developer');

console.log(output3);