/* *** 

// create class
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
};

class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
};

class NeptuneDev {
    name;
    designation = 'Neptune Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    relaseApp(version) {
        console.log(this.name, 'relase app version', version);
    }
}

// create new object from a class
const amir = new Support('Amir Khan', 'India');
const srk = new Support('SRK', 'America');
const salman = new Support('Salman Khan', 'Dubai');
// console.log(amir);

const akshay = new StudentCare('Akshay Kumar', 'India');
// akshay.buildARoutine('Tisha.')
// console.log(akshay);

const rittik = new NeptuneDev('Rittik Rowshon', 'England');
// rittik.relaseApp('1.4.5')
// console.log(rittik);

*** */
// common / parent / super class
class TeamMember {
    name;
    designation;
    address;
    constructor(name, des, address) {
        this.name = name;
        this.designation = des;
        this.address = address;
    }
}

class Support extends TeamMember {

    groupSupport;
    constructor(name, des, address, group) {
        super(name, des, address)
        this.groupSupport = group
    }

    startSession() {
        console.log(this.name, 'Started a support session.');
    }
    assignment() {
        console.log(`${this.name} start checking assignment`);
    }
};

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
};

class NeptuneDev extends TeamMember {
    addFeature;
    constructor(name, des, address, add) {
        super(name, des, address)
        this.addFeature = add;
    }
    relaseApp(version) {
        console.log(this.name, 'relase app version', version);
    }
}


const amir = new Support('Amir Khan', 'Support Web Dev', 'India', 11);
const srk = new Support('SRK', 'Support Web Dev', 'America', 3);
const salman = new Support('Salman Khan', 'Support Web Dev', 'Dubai', 9);
// console.log(salman);

const akshay = new StudentCare('Akshay Kumar', 'Student Support Web Dev', 'India');
// akshay.buildARoutine('Tisha.')
// console.log(akshay);

const rittik = new NeptuneDev('Rittik Rowshon', 'Neptune Web Dev', 'England', 'Dark Mode');
rittik.relaseApp('1.4.5')
console.log(rittik);