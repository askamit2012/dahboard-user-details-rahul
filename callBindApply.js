class A {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayMyName() {
    console.log(`Welcome Mr. ${this.name}`);
  }
}

let user1 = new A("Rahul", 27);

// console.log(user1);
// user1.sayMyName();
// user1.name = "Rahul Singh";
// user1.sayMyName();
