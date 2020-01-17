(
    function() {
        var score = 0;

        var Question = function(question, answers, correct) {
            this.question = question;
            this.answers = answers;
            this.correct = correct;

            /*
             * I originally defined methods here. The instructor mentioned adding methods
             * to the prototype is another way, but in the solution, mentioned that way was
             * actually better. It turns out putting methods here defines them individually
             * for each instance, whereas all instances share the same method instance for a
             * method defined on the prototype. So it's better to define methods in the prototype.
             * https://stackoverflow.com/questions/4508313/advantages-of-using-prototype-vs-defining-methods-straight-in-the-constructor
             */
        }

        Question.prototype.printToConsole = function() {
            console.log(this.question);
            for (var i = 0; i < this.answers.length; i++) {
                console.log(i + ': ' + this.answers[i]);
            }
        }

        Question.prototype.checkAnswerAndPrintResult = function(answer) {
            if (answer === this.correct) {
                console.log('Correct!')
                score++;
            } else {
                console.log('Incorrect.')
            }
            console.log('Current score: ' + score);
        }

        var questions = [];
        questions.push(new Question('How many developers work out of Miami?',
                ['7', '8', '9'],
                1));

        questions.push(new Question('Which developer sits next to Yaser?',
                ['Daniel', 'Alejo', 'No developer sits next to him'],
                2));

        function askQuestion() {
            var selectedQuestion = Math.floor(Math.random() * questions.length);
            questions[selectedQuestion].printToConsole();
            var userAnswer = prompt('Type the number of your chosen answer, or "exit" to quit.');

            if (!(userAnswer.toLowerCase() === "exit")) {
                questions[selectedQuestion].checkAnswerAndPrintResult(parseInt(userAnswer));
                askQuestion();
            }
        }

        askQuestion();
    }
)();