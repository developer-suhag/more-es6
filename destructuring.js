const fish = {
    fishName: 'Hilsha',
    id: 34,
    age: 2,
    address: 'Padma',
    price: 9000,
    phone: 084345234543,
    color: 'Silver'
};

/* *** 
const address = fish.address;
const price = fish.price;
const color = fish.color;
const name = fish.name;
*** */

const {
    address,
    price,
    color,
    fishName
} = fish;

// console.log(address);
// console.log(price);
// console.log(color);
// console.log(name);

const company = {
    companyName: 'Zero Programmers',
    id: 454,
    founder: {
        name: 'Suhag',
        favFood: 'Magsho Pitha',
        salary: 80000
    },
    team: {
        member: 10,
        male: 6,
        feamle: 4,
        skills: {
            first: 'HTML',
            second: 'CSS',
            third: 'Bootstrap',
            fourth: 'Tailwind',
            fivth: 'JavaScript Basic',
            new: {
                six: 'React',
                seven: {
                    backend1: 'Node',
                    backend2: 'MongoDB',
                    server: 'Firebase'
                }
            }
        }
    }
};


const {
    companyName
} = company;

const {
    name,
    salary
} = company.founder;

const {
    member,
    male,
    feamle
} = company.team;

const {
    first,
    second,
    fourth,
    third,
    fivth
} = company.team.skills;

const {
    six
} = company.team.skills.new;

const {
    backend1,
    backend2,
    server
} = company.team.skills.new.seven;


const desctructurResult = `Our company name is: ${companyName}. 
Our founder Name is: ${name} and his salaray is $${salary}. 
We have ${member} members, including ${feamle} girls and ${male} boys member. 
And we have good knowledge of ${first}5, ${second}3, ${third}5, ${fourth} and ${fivth}.
In recent future we will learn about ${six}, ${backend1}, ${backend2} and ${server}.
Insha-Allah we will rock it.`

console.log(desctructurResult);