var moment = require('moment');
moment().format();

let now = moment();

console.log(now.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));

let day = moment().dayOfYear();

console.log(`It is the ${day} day of the year.`);

let hour = moment().hour();
let minute = moment().minute();
let second = moment().second();

let answer = ((hour*60)*60) + (minute * 60) + second;
console.log(`It is ${answer} seconds into the day`);
