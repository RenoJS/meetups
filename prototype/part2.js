/**
 * WTF is this and why is it useful?
 * A guide - Part 2 - Prototype
 *
 * This guide is meant to be interactive. Change this code. Add your own. Break it. (and fix it.)
 */

/* Pick Up */

// Part 1 left us off here. This function, by the way, is called a Constructor

var Game = function() {
	this.foo = 'bar';
	this.bam = 3;
	this.fuz = function() {
		return 5 * this.bam;
	}
}

var g1 = new Game();
var g2 = new Game();

// While this is one way to do it, there is a better way

/* Meet the Prototype */

var Game = function() {
	
}

Game.prototype.foo = 'bar';
Game.prototype.bam = 3;
Game.prototype.fuz = function() {
	return 5 * this.bam;
}

var g1 = new Game();
var g2 = new Game();

// Putting these things in the prototype allows us to establish defaults, as it did when they were in the constructor
// But it also allows us to modify these defaults at any time.

Game.prototype.bar = function() {
	return this.fuz() * this.bam;
}

console.log(g1.bar(), g2.bar())

/* More on the Constructor */

// If you back up a little, we have this poor, empty constructor
var Game = function() {
	
}

// It is generally helpful to be able to pass in a few details when creating your new objects.
var g1 = new Game('quux');
var g2 = new Game('garp');

// Though as of yet, these extra parameters do nothing. This is how we use them:
var Game = function(foo) {
	this.foo = foo;
}

var g1 = new Game('quux');
var g2 = new Game('garp');

console.log(g1, g2)

/* How does this apply in Node.JS? */

// If you move the constructor and prototype to a nodejs module, you can use it just as above.
var Game = require('./game');
var g1 = new Game();
var g2 = new Game();
