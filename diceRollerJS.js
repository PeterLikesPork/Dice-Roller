const firstRandomNum = Math.ceil(Math.random()*6);
const firstDiceImage = 'dice'+firstRandomNum+'.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

const secondRandomNum = Math.ceil(Math.random()*6);
const secondDiceImage = 'dice'+secondRandomNum+'.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 1!'
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = 'The Winner is User 2!'
} else {
    document.querySelector('h1').innerHTML = 'It\'s a draw!'
}