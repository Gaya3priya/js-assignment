console.log("Without destructuring!!")
console.log()
const student = {
    name: "Helsinki",
    age: 24,
    projects:{
        diceGame: "Two player dice game using JavaScript"
    }
}
console.log(student.name);
console.log(student.age);
console.log(student.projects.diceGame);
console.log()
console.log("With destructuring!!")
const {name,age,projects:{diceGame}} = student;
console.log(name,age,diceGame);