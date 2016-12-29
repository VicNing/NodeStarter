class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        console.log(this.name);
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name,age);
        this.school = school;
    }

    printSchool() {
        console.log(this.school);
    }
}

module.exports = {
    Person:Person,
    Student:Student
};
