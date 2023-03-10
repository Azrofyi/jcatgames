#!/usr/local/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Nice to meet you, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const questions = () => {
  for (let i = 0; i < 3; ++i) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer? ');
    const isEven = randomNum % 2 === 0;
    let result;

    if (randomNum % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }

    if (answer === 'yes' && isEven === true) {
      console.log('Correct!');
    } else if (answer === 'no' && isEven === false) {
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
