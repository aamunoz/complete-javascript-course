/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

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

// Hide the dice at the beginning of the game so it's not showing some random dice value
document.querySelector('.dice').style.display = 'none';

// This is faster than querySelector
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Events can only be processed when execution stack is empty :O

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    // 3. Update round score IF the rolled number was NOT a 1 (rolling a 1 ends the turn)
    if (dice != 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        activePlayer = activePlayer == 0 ? 1 : 0;

        // Reset round score
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '1';

        // Change active player indicator. toggle works better than add/remove in this case
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {

});