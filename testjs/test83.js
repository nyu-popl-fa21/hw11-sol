const g = function() { console.log("hello"); };
const f = function(x: Num) { return x; };
f(1, g()) // type error
