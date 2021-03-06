/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Challenges:
1. A player that rolls two sixes in a row loses their entire score
2. The winning score is configurable by the players using an input field
3. Two dice are rolled each time. If either one rolls a one, the player's turn ends

Regarding challenge 1 and 3, I made it so that you need to roll at least one six in one roll, and at least
1 more six on the next roll to lose your score. If you could lose your score by rolling two sixes in one
roll, that would suuuuuuuck.
*/

var scores, roundScore, activePlayer, isGameActive, previousRollHad6, maxScore;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; // 0 = player 1, 1 = player 2, matches array indices in score

    // The IDs in the HTML also use 0 and 1, so we can use activePlayer to select components related to the players
    // Also shows inserting plain text into an element
    // document.querySelector('#current-' + activePlayer).textContent = dice;

    // Shows inserting HTML instead of plain text
    // document.querySelector('#current-' + activePlayer).innerHtml = '<em>' + dice + '</em>';

    // Shows using querySelector to read instead of write
    // var x = document.querySelector('#score-0').textContent;
    // console.log(x);

    // Hide the die at the beginning of the game so it's not showing some random dice value
    hideDie();

    // Getting an element by its ID is faster than using a query selector
    // Reset all indicators
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    var player0Panel = document.querySelector('.player-0-panel');
    player0Panel.classList.remove('active');
    player0Panel.classList.remove('winner');

    var player1Panel = document.querySelector('.player-1-panel');
    player1Panel.classList.remove('active');
    player1Panel.classList.remove('winner');

    player0Panel.classList.add('active');

    // Determine the max score
    maxScore = document.getElementById('max-score').value;
    if (!maxScore) {
        maxScore = 100;
    }

    // Display the max score for the current game
    document.getElementById("current-max-score").textContent = maxScore;

    // Set the game to active
    isGameActive = true;
}

function changePlayer() {
    // Next player
    activePlayer = activePlayer == 0 ? 1 : 0;

    // Reset round score
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Reset previousDice
    previousRollHad6 = false;

    // Change active player indicator. toggle works better than add/remove in this case
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    hideDie();
}

function hideDie() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

// Events can only be processed when execution stack is empty :O

document.querySelector('.btn-roll').addEventListener('click', function() {

    if (isGameActive) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Display result
        var dice1Dom = document.getElementById('dice-1');
        dice1Dom.style.display = 'block';
        dice1Dom.src = 'dice-' + dice1 + '.png';

        var dice2Dom = document.getElementById('dice-2');
        dice2Dom.style.display = 'block';
        dice2Dom.src = 'dice-' + dice2 + '.png';

        if (previousRollHad6 && (dice1 === 6 || dice2 === 6)) {
            // Active player loses their turn, and their global score :'(
            scores[activePlayer] = 0;

            // Update UI
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

            changePlayer();
        } else if (dice1 != 1 && dice2 != 1) {
            // Add to the active player's round score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            previousRollHad6 = dice1 === 6 || dice2 === 6;
        } else {
            // Player loses their round score and their turn
            changePlayer();
        }

        // Update previous role UI
        document.getElementById('previous-roll').textContent = dice1 + ' and ' + dice2;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (isGameActive) {
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won
        if (scores[activePlayer] >= maxScore) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            hideDie();
            
            var winnerPanel = document.querySelector('.player-' + activePlayer + '-panel');
            winnerPanel.classList.remove('active');
            winnerPanel.classList.add('winner');

            isGameActive = false;
        } else {
            // Change players if the player didn't win
            changePlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

init();