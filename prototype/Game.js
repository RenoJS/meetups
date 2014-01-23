// The only change is to set module.exports to be that constructor.
var Game = module.exports = function(foo) {
	this.foo = foo;
}

Game.prototype.foo = 'bar';
Game.prototype.bam = 3;
Game.prototype.fuz = function() {
	return 5 * this.bam;
}
