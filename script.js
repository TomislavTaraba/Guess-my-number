'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
  });

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🚨 No number!';
    displayMessage('🚨 No number!');
    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '📈 To high! Try different number'
      //     : '📉 To low! Try different number!';

      displayMessage(
        guess > secretNumber
          ? '📈 To high! Try different number'
          : '📉 To low! Try different number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Loseer 😝';
      displayMessage('Loseer 😝');
      document.querySelector('.score').textContent = score - 1;
    }
  }
});

//     //When guess is to high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         '📈 To high! Try different number';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Loseer 😝';
//       document.querySelector('.score').textContent = score - 1;
//     }
//     //When guess iy to low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         '📉 To low! Try different number!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Loseer 😝';
//       document.querySelector('.score').textContent = score - 1;
//     }
//   }
// });
