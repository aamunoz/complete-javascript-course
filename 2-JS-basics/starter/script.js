/*
 * I wonder if Javascript developers like to line up the stars like Java developers do
 */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// I hope I get to stuff I don't already know soon.

console.log(firstName + ' ' + age)
console.log('Woah, it still works with no semicolon?')
job = 'Developer';
console.log('Now ' + firstName + '\'s job is ' + job + '!');
*/

/*
 * lol, now he's going over variable mutation, which I already did above
 * Instead, I'll do the type coercion stuff he did before
 */
/*
alert('This number will be coerced into a String: ' + age);

var middleName = prompt('What is his middle name?');
console.log(firstName + ' ' + middleName + ' ' + lastName);
*/

/*
 * Coding challenge 1
 */
/*
var massJohn = 5;
var massMark = 6;

var heightJohn = 2;
var heightMark = 3;

var bmiJohn = massJohn / (heightJohn ** 2);
var bmiMark = massMark / (heightMark ** 2);

var isMarkHigherBmi = bmiMark > bmiJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkHigherBmi);
*/

/*
 * Coding challenge 2
 */
/*
var averageScoreJohn = (89 + 120 + 103) / 3;
var averageScoreMike = (116 + 94 + 123) / 3;

if (averageScoreJohn > averageScoreMike) {
    console.log('John\'s Team has a higher average score.');
} else if (averageScoreMike > averageScoreJohn) {
    console.log('Mike\'s Team has a higher average score.');
} else {
    console.log('Both teams have the same average score.')
}

averageScoreJohn = (130 + 140 + 150) / 3;

switch(true) {
    case averageScoreJohn > averageScoreMike:
        console.log('John\'s Team has a higher average score.');
        break;
    case averageScoreMike > averageScoreJohn:
        console.log('Mike\'s Team has a higher average score.');
        break;
    default:
        console.log('Both teams have the same average score.');
}

var averageScoreMary = (97 + 134 + 105) / 3;

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
    console.log('John\'s Team has a higher average score.');
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
    console.log('Mike\'s Team has a higher average score.');
} else if (averageScoreMary > averageScoreJohn && averageScoreMike) {
    console.log('Mary\'s Team has a higher average score.');
} else if (averageScoreJohn === averageScoreMike && averageScoreMike === averageScoreMary) {
    console.log('There is a three-way tie.');
} else {
    if (averageScoreJohn > averageScoreMike) {
        console.log('There is a two-way tie between John\'s Team and Mary\'s Team.');
    } else if (averageScoreJohn === averageScoreMike) {
        console.log('There is a two-way tie between John\'s Team and Mike\'s Team.');
    } else {
        console.log('There is a two-way tie between Mike\'s Team and Mary\'s Team');
    }
}

averageScoreMary = (120 + 150 + 150) / 3;

if (averageScoreJohn > averageScoreMike && averageScoreJohn > averageScoreMary) {
    console.log('John\'s Team has a higher average score.');
} else if (averageScoreMike > averageScoreJohn && averageScoreMike > averageScoreMary) {
    console.log('Mike\'s Team has a higher average score.');
} else if (averageScoreMary > averageScoreJohn && averageScoreMike) {
    console.log('Mary\'s Team has a higher average score.');
} else if (averageScoreJohn === averageScoreMike && averageScoreMike === averageScoreMary) {
    console.log('There is a three-way tie.');
} else {
    if (averageScoreJohn > averageScoreMike) {
        console.log('There is a two-way tie between John\'s Team and Mary\'s Team.');
    } else if (averageScoreJohn === averageScoreMike) {
        console.log('There is a two-way tie between John\'s Team and Mike\'s Team.');
    } else {
        console.log('There is a two-way tie between Mike\'s Team and Mary\'s Team');
    }
}
*/

/*
 * Function stuff
 */
/*
var myFunction = function() {
    console.log('hi');
}
*/

/*
 * Coding Challenge 3
 */
/*
function calculateTip(bill) {
    if (bill < 50) {
        return 0.2 * bill;
    } else if (bill <= 200) {
        return 0.15 * bill;
    } else {
        return 0.1 * bill;
    }
}

var bills = [124, 48, 268];
var tips = [calculateTip(bills[0]), calculateTip(bills[1]), calculateTip(bills[2])];
var totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);
*/

/*
 * Coding challenge 4
 */
/*
var john = {
    firstName: 'John',
    mass:20,
    height: 2,
    calculateBmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

var mark = {
    firstName: 'Mark',
    mass: 30,
    height: 3,
    calculateBmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

var bmiJohn = john.calculateBmi();
var bmiMark = mark.calculateBmi();

if (bmiJohn > bmiMark) {
    console.log(john.firstName + ' has a higher BMI: ' + bmiJohn);
} else if (bmiMark > bmiJohn) {
    console.log(mark.firstName + ' has a higher BMI: ' + bmiMark);
} else {
    console.log(john.firstName + ' and ' + mark.firstName + ' have the same BMI: ' + bmiJohn);
}
*/

/*
 * Looping backwards through an array
 */
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/*
 * Coding Challenge 5
 */
var billsJohn = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calculateTipsAndTotals: function() {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = this.calculateTip(this.bills[i]);
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    },
    calculateTip: function(bill) {
        var percentage;
        if (bill < 50) {
            percentage = 0.2;
        } else if (bill <= 200) {
            percentage = 0.15;
        } else {
            percentage = 0.1;
        }

        return bill * percentage;
    }
};
billsJohn.calculateTipsAndTotals();

var billsMark = {
    bills: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calculateTipsAndTotals: function() {
        for (var i = 0; i < this.bills.length; i++) {
            this.tips[i] = this.calculateTip(this.bills[i]);
            this.totals[i] = this.bills[i] + this.tips[i];
        }
    },
    calculateTip: function(bill) {
        var percentage;
        if (bill < 100) {
            percentage = 0.2;
        } else if (bill <= 300) {
            percentage = 0.1;
        } else {
            percentage = 0.25;
        }

        return bill * percentage;
    }
};
billsMark.calculateTipsAndTotals();

function calculateAverageTip(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }

    return sum / tips.length;
}

averageTipJohn = calculateAverageTip(billsJohn.tips);
averageTipMark = calculateAverageTip(billsMark.tips);

if (averageTipJohn > averageTipMark) {
    console.log('John payed the highest tips on average.');
} else if (averageTipMark > averageTipJohn) {
    console.log('Mark payed the highest tips on average.');
} else {
    console.log('John and Mark payed the same tip on average.');
}