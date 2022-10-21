var {DateTime} = require('luxon');

var d1 = DateTime.fromSeconds(1e9);
console.log(d1.toISO());

var d2 = DateTime.fromSeconds(1000000000);
console.log(d2.toISO());

console.log(DateTime.fromSeconds(2e9).toISO());

console.log(DateTime.now().set({ day: 21, hour: 9 }).startOf("hour").toSeconds());