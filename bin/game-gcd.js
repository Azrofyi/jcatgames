#!/usr/local/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Nice to meet you, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

const questions = () => {
  for (let i = 0; i < 3; ++i) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${firstNum} ${secondNum}`);

    function NOD(x, y) {
      if (y > x) return NOD(y, x);
      if (!y) return x;
      return NOD(y, x % y);
    }
    const result = NOD(firstNum, secondNum);
    const answer = readlineSync.question('Your answer? ');
    if (+answer === result) {
      console.log('Correct!');
    } else {
      return console.log(
        `${answer} is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`,
      );
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
questions();
