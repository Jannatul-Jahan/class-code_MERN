class Animal {
	makeSound() {
		console.log("The animal makes sound");
	}
}

class Dog extends Animal {
	makeSound() {
		console.log("The dog barks");
	}
}

class Cat extends Animal {
	makeSound() {
		console.log("The cat meows");
	}
}

let ob = new Animal();
let ob2 = new Dog();
let ob3 = new Cat();
ob.makeSound();
ob2.makeSound();
ob3.makeSound();
