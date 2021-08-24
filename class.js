// create a class
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Started a support session.');
    }
    assignment() {
        console.log(`${this.name} start checking assignment`);
    }
}
// create new object from a class
const amir = new Support('Amir Khan', 'India');
const srk = new Support('SRK', 'America');
const salman = new Support('Salman Khan', 'Dubai');
// amir.startSession();
// salman.startSession();
// srk.assignment()


// console.log(amir);
// console.log(srk);
// console.log(salman);


class ZeroProgrammer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    name;
    designation = 'Junior Web Dev';
    address = 'BD'
    averageMarks(a, b, c, d) {
        const total = a + b + c + d;
        const average = total / 4;
        console.log(`${this.name} average assignemt marks is ${average}. He lives in ${this.address}`);
    }
}

const suhag = new ZeroProgrammer('Suhag', 'Tangail');
console.log(suhag);
suhag.averageMarks(60, 60, 60, 58);

const selim = new ZeroProgrammer('Selim', 'Mymensing');
console.log(selim);
selim.averageMarks(60, 60, 60, 60)

const Sohan = new ZeroProgrammer('Sohan', 'Dhaka');
console.log(Sohan);
Sohan.averageMarks(60, 57, 60, 45)

const sakib = new ZeroProgrammer('sakib', 'Jaypurhat');
console.log(sakib);
sakib.averageMarks(60, 60, 60, 60)