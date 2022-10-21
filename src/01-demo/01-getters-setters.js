var {DateTime} = require('luxon');
const { nextStep, close, comment, lineComment } = require("../console");

(async () => {
    comment("Initialiser une Date");
    const now = DateTime.now();
    await nextStep(
        `const now = DateTime.now();`,
        now.toISO()
    );

    comment("Principaux Getters");

    lineComment("Jour du mois")
    await nextStep(
        `now.day`,
        now.day
    );
    lineComment("Mois courant")
    await nextStep(
        `now.month`,
        now.month
    );
    lineComment("Année courante")
    await nextStep(
        `now.year`,
        now.year
    );
    lineComment("Jour de la semaine. 1 pour lundi, 7 pour dimanche")
    await nextStep(
        `now.weekday`,
        now.weekday
    );

    lineComment("UNIX timestamp")
    await nextStep(
        `now.toSeconds()`,
        now.toSeconds()
    )

    comment("Pricipaux setters")

    lineComment("Définier l'année à 2028")
    let customDate = now.set({ year: 2028 });
    await nextStep(
        `let customDate = now.set({ year: 2028 });`,
        customDate.toISO()
    );

    lineComment("Définir le mois à février")
    customDate = customDate.set({ month: 2 });
    await nextStep(
        `customDate = customDate.set({ month: 2 });`,
        customDate.toISO()
    );

    lineComment("Définir le jour à 11, heure à 21, minutes à 38");
    customDate = customDate.set({ day: 11, hour: 21, minute: 38 });
    await nextStep(
        `customDate = customDate.set({ day: 11, hour: 21, minute: 38 });`,
        customDate.toISO()
    );

    comment("Quelle jour de la semaine est le 15 avril 2384?");
    customDate = customDate.set({ day: 15, month: 4, year: 2384 });
    await nextStep(
        `customDate = customDate.set({ day: 15, month: 4, year: 2384 });`,
        customDate.toISO()
    );
    await nextStep(
        `customDate.weekday`,
        customDate.weekday
    );
    lineComment("En une seule ligne:")
    await nextStep(
        `customDate.set({ day: 15, month: 4, year: 2384 }).weekday;`,
        customDate.set({ day: 15, month: 4, year: 2384 }).weekday
    );

    close();
})();