/**
 * WTF is this and why is it useful?
 * A guide - Part 1
 *
 * This guide is meant to be interactive. Change this code. Add your own. Break it. (and fix it.)
 */

/* Intro */

// As you should know by now, you can create objects.
var item = {};

// These objects have keys and values. The values can be string and numbers
item.foo = 'bar';
item.bam = 3;

// These values can even be other objects
item.baz = { foo: 'bar' };

// or functions
item.fuz = function() {
	return 5;
}

// These values can even be self-referential (but be careful...)
item.quux = item;

// But there is something you should know. Javascript is loosely typed.
// This means lots of things (with both pros and cons), but this means one thing in particular.
// Everything in Javascript is the same thing, this is, everything is an object.

// With any object, you can see its constructor (that is, the way the object was created)
// and you can see its "type"

var a = 5;
var b = 'hello';
var c = [];

console.log('constructor and typeof values:');
console.log('   ', typeof a, a, '    ', a.constructor);
console.log('   ', typeof b, b, '', b.constructor);
console.log('   ', typeof c, c, '   ', c.constructor);
console.log('   ', typeof item, 'item', ' ', item.constructor);

// Notice how even numbers and string have a constructor. These are objects, just as much as item is.

// But what is this "function Array()..." nonsense?
// In the same way that you can create an array as
var d = [1,2,3];
// You can create an array as
var e = new Array(1,2,3);
// See that they still have the same constructor and type
console.log(d.constructor, e.constructor, typeof d, typeof e)

/* Custom Constructors */

// We know we can create an object, but what if I want to create a bunch of objects that are all similar?
// What we want is a custom constructor. (It is a common standard to capitalize the first letter of a constructor)

var Game = function() {
	
}

// Now I can create instances of this Game.
var g1 = new Game();
g1.foo = 'bar';
g1.bam = 3;

var g2 = new Game();
g2.foo = 'bar';
g2.bam = 3;

// But wait a minute. I haven't actually saved any code here...
// I need to set values in my constructor. That is what `this` is for.

var Game = function() {
	this.foo = 'bar';
	this.bam = 3;
	this.fuz = function() {
		return 5;
	}
}

// Now I can create instances of this better Game.
var g1 = new Game();
var g2 = new Game();

// As you can see, in a constructor, `this` refers to the object that we have created.
// When constructing `g1`, `this` refers to `g1`

// In the last constructor I added a function to this, but what if you wanted to return some value on the object?
// Again, use this. When running a function, `this` refers to the parent object of the function.
var Game = function() {
	this.fuz = function() {
		return 5 * this.bam;
	}
}

// Extending the first example, `this` now refers to `item`.
item.fuz = function() {
	return 5 * this.bam;
}

// Notice that both of these functions have the same contents. We can use this to our advantage.

var fuz = function() {
	return 5 * this.bam;
}

item.fuz = fuz;
var Game = function() {
	this.fuz = fuz;
}

// In each case, even though the functions are the same function, `this` refers to the parent.
// While this is not a useful example, it shows that functions can be moved to other objects,
// and that when you do, `this` refers to the new parent object.
