const {DateTime} = require("luxon");

const date1 = DateTime.now().set({ month: 7, day: 13 });

console.log(date1.setLocale("en-US").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(isDaylightTime(date1));

const date2 = DateTime.now().set({ month: 12, day: 4 });

console.log(date2.setLocale("en-US").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(isDaylightTime(date2));

function isDaylightTime(dateTime) {
    const formatted = dateTime.setLocale("en-US").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET);

    return formatted.includes("Daylight");
}