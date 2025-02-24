class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }
}

const dog = new Animal("Dottie", "Dog");
dog.speak();
