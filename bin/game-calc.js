#!/usr/local/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Nice to meet you, ${name}!`);
console.log('What is the result of the expression?');

const questions = () => {
  for (let i = 0; i < 3; ++i) {
    const firstNum = Math.floor(Math.random() * 100);
    const secondNum = Math.floor(Math.random() * 100);
    const randomN = Math.floor(Math.random() * 3);
    let randomOperator;
    let result;
    switch (randomN) {
      case 0:
        randomOperator = '+';
        result = firstNum + secondNum;
        break;
      case 1:
        randomOperator = '-';
        result = firstNum - secondNum;
        break;
      case 2:
        randomOperator = '*';
        result = firstNum * secondNum;
        break;
    }
    console.log(`Question: ${firstNum} ${randomOperator} ${secondNum}`);
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
