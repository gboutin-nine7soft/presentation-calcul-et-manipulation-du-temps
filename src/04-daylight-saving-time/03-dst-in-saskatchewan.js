const {DateTime} = require("luxon");

function isDaylightTime(dateTime) {
    const formatted = dateTime.setLocale("en-US").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET);

    return formatted.includes("Daylight");
}

const now = DateTime.now().setZone("America/Regina");
for (let month=1; month<=12; month++) {
    let date = now.set({ month }).startOf("month")
    console.log(
        date.toISO(),
        isDaylightTime(date)
    )
}