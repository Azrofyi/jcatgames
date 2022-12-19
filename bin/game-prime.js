#!/usr/local/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Nice to meet you, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const questions = () => {
  for (let i = 0; i < 3; ++i) {
    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer? ');
    let isPrime = true;
    let result;

    if (randomNum === 1) {
      isPrime = false;
    } else if (randomNum > 1) {
      for (let n = 2; n < randomNum; ++n) {
        if (randomNum % n === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = true;
    }

    if (isPrime === true) {
      result = 'yes';
    } else {
      result = 'no';
    }

    if (answer === 'yes' && isPrime === true) {
      console.log('Correct!');
    } else if (answer === 'no' && isPrime === false) {
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
