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
    const answerFirst = readlineSync.question('Your answer? ');
    const isEven = randomNum % 2 === 0;
    let correctAnswer;

    if (randomNum % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    if (answerFirst === 'yes' && isEven === true) {
      console.log('Correct!');
    } else if (answerFirst === 'no' && isEven === false) {
      console.log('Correct!');
    } else {
      return console.log(
        `${answerFirst} is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`,
      );
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
questions();
