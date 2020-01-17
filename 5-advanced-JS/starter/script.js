// Anything that is not a primitive is an object, including functions and arrays

// Class in other programming languages is a constructor or prototype in Javascript

/*
 * Javascript is a prototype based language; inheritance works via prototypes.
 * Every object has a prototype property
*/

/*
 * We put methods and properties of an object that we want to be inherited in that
 * object's prototype. In the Person example, the Person's prototype is not the
 * prototype of the Person itself; it's the prototype of instances of Person
 */

/*
 * Prototype chain is like the inheritance hierarchy. When a method or property is
 * called on an object, it checks the object. If it's not there, it checks its
 * prototype. If it's not there, it checks the prototype's prototype, etc.
 */

// Object literal we used before
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

/*
 * Function constructor; convention is to use capital letter
 * Pass in one property for each property of the objects you create
 */
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // Shows the way of having a common function you would expect from Java
    /*
    this.calculateAge = function() {
        console.log(2020 - this.yearOfBirth);
    };
    */
}

/*
 * Another way of adding a common function, showing how the prototype is the key. This is a common way
 * to add functions to a function constructor
 */
Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}

// It's possible but not common to do it for properties too
Person.prototype.lastName = 'Smith';

/*
 * Instantiation using new keyword, which first creates a new EMPTY object. Then
 * constructor function is called with specified parameters.
 * 
 * In a regular function call, "this" keyword refers to global object. The new keyword makes
 * "this" keyword point to the empty object.
 * 
 * If function doesn't return anything, return value is object created by new keyword.
 */
var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
// This is not a good way to add data
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });

/*
 * Object.create object inherits from passed in object, whereas function constructor objects
 * interit from function's prototype
 */

// Primitives vs objects
// Object variables hold references to objects, whereas primitives hold the value of the variable
// Primitives
var a = 23;
var b = a;
a = 46;

// They're different
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

// They're the same
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
// The age is the same as initial declaration, but the city is updated
console.log(age);
console.log(obj.city);

// Functions
/*
 * Functions are instances of Object type
 * Can pass and return functions to other functions
 * As a result, we say Javascript has first-class functions
 */

 // Functions taking other functions as input
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2020 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRates = arrayCalc(ages, maxHeartRate)
console.log(ages);
console.log(fullAges);
console.log(maxHeartRates);

// Functions returning functions
function interviewQuestion(job) {
    if (job === 'designer') {
        // anonymous function, doesn't have a name
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

// Can immediately call a returned function
interviewQuestion('teacher')('Mark');

/*
 * IIFE - Immediately Invoked Function Expressions. Used to create a new scope that creates
 * data privacy.
 */
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

/*
 * Turns it from a declaration to an expression, because "what's inside a parenthesis,
 * cannot be a statement"
 */
(
    function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();

// Created data privacy. This is not available outside of the function, so this errors out
// console.log(score);

(
    function(goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= (5 - goodLuck));
    }
)(5);

// Closures
function retirement(retirementAge) {
    /*
     * This variable normally goes away after the function finishes executing,
     * but the inner function can still access it after that
     */
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUs = retirement(66);
retirementUs(1990);

retirement(66)(1990);

/*
 * "An inner function always has access to the variables and parameters of its outer
 * function, even after the outer function has returned."
 * After a function returns, and an execution context is gone, the variable object holding
 * all the variables is still there.
 */

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

/*
 * What I did when he asked to use closures in the interview question function. I didn't realize
 * what he wanted, so I just added more functionality that uses a closure.
 */
function interviewQuestionClosure(job) {
    var greeting = "Hello";
    if (job === 'designer') {
        // anonymous function, doesn't have a name
        return function(name) {
            console.log(greeting + " " + name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(greeting + '. What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log(greeting + " " + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestionClosure('teacher');
teacherQuestion('Sam');

/*
 * He was actually looking for this. He says it's cleaner code than the non-closure version
 * I guess one inner function is better than multiple? I thought lots of small functions was
 * better than one big one though ¯\_(ツ)_/¯
 */
function interviewQuestionClosureCorrect(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
interviewQuestionClosureCorrect('teacher')('Tom');

// Bind, call, and apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + 
                    this.name + ", I\'m a " + this.job + ' and I\'m ' + this.age +
                    ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ", I\'m a " + this.job +
                    ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

// Can use call to "borrow" the method. The first arg will be the "this" variable in the method
john.presentation.call(emily, 'friendly', 'afternoon');

/*
 * apply is the same as call, but it accepts the arguments as an array. This doesn't actually
 * work in this case since the method doesn't expect an array
 */
// john.presentation.apply(emily, ['friendly', 'afternoon']);

/**
 * Bind allows you to "prepare" a function with preset arguments that you can call later
 */
var johnFriendly = john.presentation.bind(john, 'friendly');

// You can preset some of the args and not others. This is called currying
johnFriendly('morning');
johnFriendly('evening');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Using currying with passing functions as arguments
function isFullAge(limit, el) {
    return el >= limit;
}

// In this case, we don't care what "this" is, so we just pass "this"
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);