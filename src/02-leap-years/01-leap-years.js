var {DateTime} = require('luxon');
const { nextStep, close, comment, lineComment } = require("../console");

(async () => {
    const now = DateTime.now();

    comment("Comment déterminer qu'une année est bissextile?")

    await nextStep(
        `const now = DateTime.now();`,
        now.toISO()
    );

    lineComment("Calculer la date 1 jour avant le 1er mars")
    await nextStep(
        `now.set({ month: 3, day: 1 }).minus({ day: 1 })`,
        now.set({ month: 3, day: 1 }).minus({ days: 1 })
    );

    lineComment("Calculer la date 1 jours après le 28 février")
    await nextStep(
        `now.set({ month: 2, day: 28 }).minus({ day: 1 })`,
        now.set({ month: 2, day: 28 }).plus({ days: 1 })
    )

    lineComment("Pour obtenir un booléen en une seule ligne:")
    await nextStep(
        `now.set({ month: 2, day: 28 }).plus({ days: 1 }).day === 29`,
        now.set({ month: 2, day: 28 }).plus({ days: 1 }).day === 29 ? `true`: `false`
    )

    // await nextStep(
    //     `now.set({ year: 2024, month: 3, day: 1 }).minus({ day: 1 })`,
    //     now.set({ year: 2024, month: 3, day: 1 }).minus({ day: 1 })
    // );

    // await nextStep(
    //     `now.set({ year: 2100, month: 3, day: 1 }).minus({ day: 1 })`,
    //     now.set({ year: 2100, month: 3, day: 1 }).minus({ day: 1 })
    // );

    // await nextStep(
    //     `now.set({ year: 2400, month: 3, day: 1 }).minus({ day: 1 })`,
    //     now.set({ year: 2400, month: 3, day: 1 }).minus({ day: 1 })
    // );

    close();
})();

