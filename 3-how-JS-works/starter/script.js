///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
        fourth(); // error because fourth isn't in the lexical scope of second
    }
}

function third() {
    var d = 'John';
    console.log(d);

    function fourth() {
        var e = 'sup';
    }
}




///////////////////////////////////////
// Lecture: The this keyword









