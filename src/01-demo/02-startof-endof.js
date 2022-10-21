var {DateTime} = require('luxon');
const { nextStep, close, comment, lineComment } = require("../console");

(async () => {
    comment("Voyager au début/fin d'une année, mois, semaine ou heure")
    let now = DateTime.now();
    await nextStep(
        `let now = DateTime.now();`,
        now.toISO()
    );

    lineComment("Comment déterminer le premier jour d'un mois inconnu?");
    let randomMonth = Math.ceil(Math.random()*12);
    await nextStep(
        `let randomMonth = Math.ceil(Math.random()*12);`,
        randomMonth
    );
    let customDate = now.set({ month: randomMonth });
    await nextStep(
        `let customDate = now.set({ month: randomMonth });`,
        customDate.toISO()
    );
    lineComment("Avec un setter... pas optimal");
    await nextStep(
        `customDate.set({ month: randomMonth, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 })`,
        customDate.set({ month: randomMonth, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 })
    )
    lineComment("Meilleure solution: .startOf")
    lineComment("Début du mois")
    await nextStep(
        `customDate.startOf("month")`,
        customDate.startOf("month")
    )
    lineComment("Fin du mois")
    await nextStep(
        `customDate.endOf("month")`,
        customDate.endOf("month")
    )

    lineComment("Début de la journée")
    await nextStep(
        `customDate.starOf("day")`,
        customDate.startOf("day")
    )
    lineComment("Fin de la journée")
    await nextStep(
        `customDate.endOf("day")`,
        customDate.endOf("day")
    )

    lineComment("Début de l'heure")
    await nextStep(
        `customDate.startOf("hour")`,
        customDate.startOf("hour")
    )
    lineComment("Fin de l'heure")
    await nextStep(
        `customDate.endOf("hour")`,
        customDate.endOf("hour")
    )

    lineComment("Début de la semaine (lundi dernier)")
    await nextStep(
        `customDate.startOf("week")`,
        customDate.startOf("week")
    )
    lineComment("fin de la semaine (dimanche prochain)")
    await nextStep(
        `customDate.endOf("week")`,
        customDate.endOf("week")
    )

    close();
})();