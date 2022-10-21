const { DateTime } = require("luxon");

function isLeapYear (year) {
    return DateTime.now()
        .set({ year, month: 2, day: 28 })
        .plus({ days: 1 })
        .day === 29
}

// console.log("");
// console.log("/*** PROCHAINES ANNÉES ***/");
// console.log("");

// for (let year = 2022; year <= 2050; year++) {
//     console.log(`${year}: ${isLeapYear(year)}`);
// }

console.log("");
console.log("/*** ANNÉES MULTIPLES DE 100 ***/");
console.log("");

for (let year = 1900; year <= 2800; year+=100) {
    console.log(`${year}: ${isLeapYear(year)}`);
}