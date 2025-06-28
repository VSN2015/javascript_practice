// 1. Khai báo biến
// var in ES5
// let, const in ES6

// var: có thể redeclare, có thể reassign
// let: không thể redeclare, có thể reassign
// const: không thể redeclare, không thể reassign

// 2. Phạm vi biến
// scope
  // - global scope
    // var firstName = "Ethan"

  // - function scope
    // function showName() {
    //     var lastName = "Hunt"
    //     console.log(firstName, lastName, "Quá đẹp trai")
    // }
    // showName();
  // - block scope
    // for(let i = 0; i < 10; i++) {
    //     console.log(i)
    // }
    // console.log(i)

// 3. String template
  // const firstName = "Ethan"
  // const lastName = "Hunt"
  // console.log(`Hello ${firstName} ${lastName}`)

// 4. Enhanced object properties
    // - property shorthand
    // - Method property - define function in object
    // - Computed Property Keys

    // function person(name, age){
    //   return {
    //     name: "ES5 " + name,
    //     age: age
    //   }
    // }

    // function person(name, age) {
    //   return {
    //     name,
    //     age,
    //     getFullName() {
    //       return `${name} ${age}`
    //     }
    //   }
    // }

    // console.log(person("ES6 Ethan", 25).getFullName());

    // function person(name, age) {
    //   return {
    //     name,
    //     age,
    //     [`salaryOf${name}`]: 1000
    //   }
    // }

    // console.log(person("Ethan", 25));

// 5. Extended Parameter Handling
  // Default Param

  // Rest Param
  // function getName(firstName = "", lastName = "", ...rest) {
  //   console.log(rest)
  //   return `${firstName} ${lastName} ${rest}`
  // }

  // console.log(getName("Ethan", "Hunt", "ES6", "ES7", "ES8"));

  // Spread Operator
  // const todoList = ["di choi", "hoc js"]
  // const todoListMore = ['di ngu', ...todoList]
  // console.log(todoListMore)

// 6. Arrow Function
  // const person = {
  //   name: 'Ethan',
  //   age: 20,
  //   getPersonalDescription() {
  //     console.log(`${this.name} ${this.age}`)

  //     const getName = () => ({name: this.name, age: this.age})

  //     console.log(getName())
  //   }
  // }

  // person.getPersonalDescription()

// 7. Destructuring Assignment
  // const list = ['di an', 2, 'di choi']
  // const [a, b, c] = list;
  // console.log({a, b, c})

  // const person = {
  //   firstName: 'TH',
  //   lastName: 'Nguyen',
  //   age: 22
  // }

  // const { firstName, lastName, age } = person
  // console.log({ firstName, lastName, age })

// 8. Class
  // class Person {
  //   constructor(firstName, lastName) {
  //     this.firstName = firstName
  //     this.lastName = lastName
  //   }

  //   getFullName() {
  //     return `${this.firstName} ${this.lastName}`
  //   }

  //   getJob() {
  //     return `Cong viec cua toi la: ${this.job}`
  //   }
  // }

  // class Worker extends Person {
  //   constructor(firstName, lastName, job) {
  //     super(firstName, lastName)
  //     this.job = job
  //   }
  // }

  // const newWorker = new Worker("Sang", "Nguyen", "Worker")
  // console.log(newWorker.getFullName())
  // console.log(newWorker.getJob())

// Promise
// Asynchronous
