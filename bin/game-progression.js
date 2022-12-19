#!/usr/local/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Games!');
const name = readlineSync.question('May i have your name? ');
console.log(`Nice to meet you, ${name}!`);
console.log('What number is missing in the progression?');

const questions = () => {
  for (let i = 0; i < 3; ++i) {
    const randomNum = Math.floor(Math.random() * 50);
    const randomSumNum = Math.floor(Math.random() * 10 + 1);
    const randomMissingNum = Math.floor(Math.random() * 10);

    const sequence = [randomNum];
    let sumNum = randomNum;

    for (let i = 0; i < 9; ++i) {
      sumNum += randomSumNum;
      sequence.push(sumNum);
    }
    const missingNum = sequence[randomMissingNum];
    sequence[randomMissingNum] = '..';
    const sequenceToString = sequence.join(' ');
    console.log(`Question: ${sequenceToString}`);

    const answer = readlineSync.question('Your answer? ');
    if (+answer === missingNum) {
      console.log('Correct!');
    } else {
      return console.log(
        `${answer} is wrong answer ;(. Correct answer was '${missingNum}'.\nLet's try again, ${name}!`,
      );
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
questions();
