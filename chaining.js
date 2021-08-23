const myObject = {
    a: 4,
    b: 6,
    c: 9,
    x: 8,
    y: 12
};

const {
    a,
    y
} = myObject;
// console.log(a, y);

// destructuring with Array 

const [aa, bb, cc] = [34, 89, 45];
// console.log(aa, bb, cc);
const arr = ['Rahim', 'Karim', 'Torim', 'Morim', 'Jorim'];

const [name1, name2] = arr;
// console.log(name1, name2);

// chaning 

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

console.log(company.team.skills.fivth);