/**
 * WTF is this and why is it useful?
 * A guide - Part 3 - Prototypal Inheritance
 *
 * This guide is meant to be interactive. Change this code. Add your own. Break it. (and fix it.)
 */

/* Pick Up */

// In Part 2, we learned we can do this

var Animal = function(sound) {
	this.sound = sound;
}

Animal.prototype.makeSound = function() {
	console.log(this.sound);
}

var dog = new Animal('woof');
var cat = new Animal('meow');
var bird = new Animal('tweet');
var mouse = new Animal('squeak');

// But what if we want to make this inheritance deeper?
// What if we want a Dog constructor that extends Animal, but sets the default sound?

/* Introducing Protypal Inheritance */

var Dog = function(breed) {
	this.breed = breed;
	this.sound = 'woof';
}

// But wait, it doesn't inherit from Animal
var brandy = new Dog('pomeranian');
console.log(brandy.makeSound)

// But now it does
Dog.prototype = new Animal();
var nacho = new Dog('chihuahua');
console.log(nacho.makeSound)

// nacho now inherits from Dog, which inherits from Animal.

// Let's take this even farther

var Chihuahua = function() {
	
}

Chihuahua.prototype = new Dog('chihuahua');
Chihuahua.prototype.yappy = true;

var nacho = new Chihuahua();

// nacho is an instance of Chihuahua, which inherits from Dog, which inherits from Animal

// nacho gets sound from Dog
console.log(nacho.sound)
// nacho gets breed from the Dog parameter
console.log(nacho.breed)
// nacho gets yappy from Chihuahua
console.log(nacho.yappy)
// nacho gets makeSound from Animal
nacho.makeSound();
