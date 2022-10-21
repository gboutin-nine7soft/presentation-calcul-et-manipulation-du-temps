var {DateTime} = require('luxon');
const { nextStep, close, comment, lineComment } = require("../console");

(async () => {
    comment("Calculer le temps écoulé entre 2 dates, en années, mois, jours, ... secondes")
    let now = DateTime.now();
    await nextStep(
        `let now = DateTime.now()`,
        DateTime.now().toISO()
    )

    let lowerDate = now.minus({ days: 3 });
    await nextStep(
        `let lowerDate = now.minus({ days: 3 });`,
        lowerDate.toISO()
    );
    let upperDate = now.plus({ days: 3 });
    await nextStep(
        `let upperDate = now.plus({ days: 3 });`,
        upperDate.toISO()
    );
    await nextStep(
        `upperDate.diff(lowerDate, ["day"]).toObject()`,
        JSON.stringify(upperDate.diff(lowerDate, ["day"]).toObject())
    )

    lineComment("L'écart doit être d'au moins 6 jours:")
    await nextStep(
        `upperDate.diff(lowerDate.plus({ hour: 2 }), ["day"]).toObject()`,
        JSON.stringify(upperDate.diff(lowerDate.plus({ hour: 2 }), ["day"]).toObject())
    )

    lineComment("Combien de jours comporte le mois actuel?")
    lowerDate = now.startOf("month");
    await nextStep(
        `lowerDate = now.startOf("month");`,
        lowerDate.toISO()
    )
    upperDate = lowerDate.plus({ month: 1 });
    await nextStep(
        `upperDate = lowerDate.plus({ month: 1 });`,
        upperDate.toISO()
    );
    await nextStep(
        `upperDate.diff(lowerDate, ["days"]).toObject()`,
        JSON.stringify(upperDate.diff(lowerDate, ["days"]).toObject()),
    );

    comment("Combien d'heures écoulées entre le 12 juin 1973 à 19:30 et le 25 septembre 2048 à 04:25?")
    lowerDate = now.startOf("year").set({ year: 1973, month: 6, day: 12, hour: 19, minute: 30 });
    await nextStep(
        `lowerDate = now.startOf("year").set({ year: 1973, month: 6, day: 12, hour: 19, minute: 30 });`,
        lowerDate.toISO()
    )
    upperDate = now.startOf("year").set({ year: 2048, month: 9, day: 25, hour: 4, minute: 25 });
    await nextStep(
        `upperDate = now.startOf("year").set({ year: 2048, month: 9, day: 25, hour: 4, minute: 25 });`,
        upperDate.toISO()
    )
    await nextStep(
        `upperDate.diff(lowerDate, ["hours"]).toObject()`,
        JSON.stringify(upperDate.diff(lowerDate, ["hours"]).toObject())
    )

    lineComment("On peut spécifier plus d'une unitée si on sait que le résultat ne sera pas toujours entier");
    await nextStep(
        `upperDate.diff(lowerDate, ["hours", "minutes"]).toObject()`,
        JSON.stringify(upperDate.diff(lowerDate, ["hours", "minutes"]).toObject())
    )

    close();
})();