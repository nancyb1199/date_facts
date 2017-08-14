// What is today
var moment = require('moment');
moment().format();

let now = moment();

console.log(now.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));

// Calculate day of the day
let day = moment().dayOfYear();

console.log(`It is the ${day} day of the year.`);

// Calculate seconds in a day
let hour = moment().hour();
let minute = moment().minute();
let second = moment().second();

let answer = ((hour*60)*60) + (minute * 60) + second;
console.log(`It is ${answer} seconds into the day`);

// Daylight savings time?
let dst = moment().isDST();

if(dst){
  console.log("It is during Daylight Savings Time");
}
else {
  console.log("It is not during Daylight Savings Time");
}

// Leap Year?
let ly = moment().isLeapYear();
if(ly){
  console.log("It is a leap year");
}
else {
  console.log("It is not a leap year");
}
