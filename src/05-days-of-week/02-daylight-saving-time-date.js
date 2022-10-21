const {DateTime} = require("luxon"); 

/*
 * Avancement de l'heure au Quebec: 2e dimanche de mars a 2:00 AM (13 mars 2022)
 **/
const dateAvancementHeure = (year) => {
    var currentDate = DateTime.now().set({ year, month: 3 }).startOf("month");

    var currentWeekday = currentDate.weekday;

    var daysUntilFirstSunday = 7 - currentWeekday;

    var firstSunday = currentDate.plus({ days: daysUntilFirstSunday });
    var secondSunday = firstSunday.plus({ weeks: 1 });

    return secondSunday;
}

/**
 * Recul de l'heure au Canada: 1er dimanche de novembre a 2:00 AM (6 novembre 2022)
 */
const dateReculHeure = (year) => {
    var currentDate = DateTime.now().set({ year, month: 11 }).startOf("month");
    var daysUntilFirstSunday = 7 - currentDate.weekday;

    var firstSunday = currentDate.plus({ days: daysUntilFirstSunday });

    return firstSunday;
}

/**
 * Avant 2007: Recul de l'heure le dernier dimanche d'octobre (29 octobre 2006)
 */
const dateReculHeureAncien = (year) => {
    var currentDate = DateTime.now().set({ year, month: 10 }).endOf("month").startOf("day");

    var daysSinceLastSunday = currentDate.weekday - 7;
    if (daysSinceLastSunday < 0) daysSinceLastSunday += 7;

    var lastSunday = currentDate.minus({ days: daysSinceLastSunday });

    return lastSunday;
}

var dateAvancement = dateAvancementHeure(2022);
var dateRecul = dateReculHeure(2022);
var ancienneDateRecul = dateReculHeureAncien(2006);

console.log(dateAvancement.setLocale("fr").toFormat("d LLLL"));
console.log(dateRecul.setLocale("fr").toFormat("d LLLL"));
console.log(ancienneDateRecul.setLocale("fr").toFormat("d LLLL"));
