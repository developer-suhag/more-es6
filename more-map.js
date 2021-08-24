const friends = ['Amran', 'Sakib', 'Selim', 'Sohan', 'Din Islam', 'Tisha', 'Jasy', 'Sanji', 'Nite'];

const fLength = friends.map(f => f.length);
// console.log(fLength);

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

const productName = products.map(p => p.name);
const productPrice = products.map(p => p.price);
const productColor = products.map(p => p.color);

// console.log('All Product Names:', productName);
// console.log('All Product price:', productPrice);
// console.log('All Product Color:', productColor);

// forEach ()

// products.forEach(p => console.log('Product name: ', p.name));
// products.forEach(p => console.log(p.price))
products.forEach(p => console.log('Product Color:', p.color))