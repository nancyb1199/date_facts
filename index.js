
var moment = require('moment');
moment().format();
const chalk = require('chalk');

// What is today
let now = moment();

console.log('It is ' + chalk.blue(now.format('dddd, MMMM Do YYYY, h:mm:ss a')));

// Calculate day of the day
let day = moment().format("DDDo");

console.log('It is the ' + chalk.magenta(`${day}`) + ' day of the year.');

// Calculate seconds in a day
let hour = moment().hour();
let minute = moment().minute();
let second = moment().second();

let answer = ((hour*60)*60) + (minute * 60) + second;
console.log('It is ' + chalk.cyan(`${answer}`) + ' seconds into the day');

// Daylight savings time?
let dst = moment().isDST();

if(dst){
  console.log("It " + chalk.green("is") + " during Daylight Savings Time");
}
else {
  console.log("It " + chalk.red("is not") +  " during Daylight Savings Time");
}

// Leap Year?
let ly = moment().isLeapYear();
if(ly){
  console.log("It " + chalk.green("is") + " a leap year");
}
else {
  console.log("It " + chalk.red("is not") +  " a leap year");
}
