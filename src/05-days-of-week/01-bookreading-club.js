const {DateTime} = require("luxon");

const startOfYear = DateTime.now().setZone("America/Toronto").startOf("year");

// let startOfMonth = startOfYear;

for (let firstOfMonth = startOfYear; firstOfMonth.year == startOfYear.year; firstOfMonth = firstOfMonth.plus({ month: 1 })) {
    let date = firstOfMonth;

    let daysUntillFirstWednesday = 3 - date.weekday;
    if (daysUntillFirstWednesday < 0) daysUntillFirstWednesday += 7;

    date = date.plus({ day: daysUntillFirstWednesday, weeks: 2 });

    console.log(date.setLocale("fr").toFormat("d LLLL"));
}