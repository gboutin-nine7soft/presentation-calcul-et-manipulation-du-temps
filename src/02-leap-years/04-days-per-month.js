const { DateTime } = require("luxon");

function daysPerMonth(dateTime) {
    const startOfMonth = dateTime.startOf("month");
    const startOfNextMonth = startOfMonth.plus({ months: 1 });
    return startOfNextMonth.diff(startOfMonth, ["days"]).toObject().days;
}

const startOfYear = DateTime.now().set({ year: 2022 }).startOf("year");

for (let month = 1; month <= 12; month++) {
    let date = startOfYear.set({ month })
    console.log(`${date.toFormat("LLLL")}`, daysPerMonth(date.set({ month })));
}