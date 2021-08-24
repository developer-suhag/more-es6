// filter ()

const numbers = [4, 29, 42, 2, 8, 34, 88, 9, 77, 5];

const biggestNumbers = numbers.filter(num => num > 20);
const smallestNumbers = numbers.filter(num => num < 10)
// console.log(biggestNumbers);
// console.log(smallestNumbers);


const products = [{
        name: 'Mobile Phone',
        price: 18500,
        color: 'golden'
    },
    {
        name: 'Green pen',
        price: 5,
        color: 'green'
    },
    {
        name: 'Black pen',
        price: 5,
        color: 'black'
    },
    {
        name: 'Head Phone',
        price: 1200,
        color: 'black'
    },
    {
        name: 'Blue light filter Glass',
        price: 800,
        color: 'white'
    },
    {
        name: 'Water Bottle',
        price: 10,
        color: 'white'
    },
];

const expensive = products.filter(p => p.price > 1000);
const mediumProuct = products.filter(p => p.price > 100 && p.price < 1000);
const cheapestProduct = products.filter(p => p.price < 100);

const extraExpentsive = products.filter(p => p.price > 20000);

const blacks = products.filter(p => p.color == 'black');
const whites = products.filter(p => p.color == 'white')
const green = products.filter(p => p.color == 'green');
const golden = products.filter(p => p.color == 'golden');
const blues = products.filter(p => p.color == 'blue')


// console.log('Expensive products:', expensive);
// console.log('Medium products:', mediumProuct);
// console.log('Cheap products:', cheapestProduct);
// console.log('Extra Expensive products:', extraExpentsive);
// console.log('Black color products:', blacks);
// console.log('While color products:', whites);
// console.log('Green color products:', green);
// console.log('Golden color products:', golden);
// console.log('Blue color products:', blues);


// find ()

const findBigNumber = numbers.find(n => n > 20);
const findSmallestNumber = numbers.find(n => n < 10)
// console.log(findBigNumber);
// console.log(findSmallestNumber);


const findExpensive = products.find(p => p.price > 1000);
const findCheapest = products.find(p => p.price < 100);

const findBlue = products.find(p => p.color == 'blue');
const findBlack = products.find(p => p.color == 'black')

// console.log(findExpensive);
// console.log(findCheapest);
// console.log(findBlue);
console.log(findBlack);