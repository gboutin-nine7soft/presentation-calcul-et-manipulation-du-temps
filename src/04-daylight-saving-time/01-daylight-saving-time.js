var {DateTime} = require('luxon');
const { nextStep, comment, close } = require("../console");

(async () => {
    comment("Avancement de l'heure au Quebec: 2e dimanche de mars a 2:00 AM (13 mars 2022)")

    const march13thAt1AM = DateTime.now().startOf("day").set({ month: 3, day: 13, hour: 1 });
    await nextStep(
        `const march13thAt1AM = DateTime.now().startOf("day").set({ month: 3, day: 13, hour: 1 });`,
        march13thAt1AM.toISO()
    );

    await nextStep(
        `march13thAt1AM.plus({ hour: 1 });`,
        march13thAt1AM.plus({ hour: 1 }).toISO()
    );

    await nextStep(
        `march13thAt1AM.plus({ minutes: 59, seconds: 59 })`,
        march13thAt1AM.plus({ minutes: 59, seconds: 59 }).toISO()
    );

    comment("Combien d'heures entre le 13 et le 14 mars a minuit?");

    let march13th = DateTime.now().startOf("day").set({ month: 3, day: 13 });
    await nextStep(
        `let march13th = DateTime.now().startOf("day").set({ month: 3, day: 13 });`,
        march13th.toISO()
    );

    let march14th = march13th.plus({ days: 1 });
    await nextStep(
        `let march14th = march13th.plus({ days: 1 });`,
        march14th.toISO()
    );

    march14th.diff(march13th, ["hours"]).toObject();
    await nextStep(
        `march14th.diff(march13th, ["hours"]).toObject();`,
        JSON.stringify(march14th.diff(march13th, ["hours"]).toObject())
    );

    // let interval = Interval.fromDateTimes(march13th, march14th);
    // await nextStep(
    //     `let interval = Interval.fromDateTimes(march13th, march14th);`,
    //     interval.toString()
    // );

    // await nextStep(
    //     `interval.length("hours")`,
    //     interval.length("hours")
    // );

    comment("Recul de l'heure au Canada: 1er dimanche de novembre a 2:00 AM (6 novembre 2022)");

    let november6thAt1AM = DateTime.now().startOf("day").set({ month: 11, day: 6, hour: 1 });
    await nextStep(
        `let november6thAt1AM = DateTime.now().startOf("day").set({ month: 11, day: 6, hour: 1 });`,
        november6thAt1AM.toISO()
    );

    await nextStep(
        `november6thAt1AM.plus({ hours: 1 });`,
        november6thAt1AM.plus({ hours: 1 }).toISO()
    );

    // 2 avril 2006
    // 29 octobre 2006

    comment("Avant 2007: Avancement le premier dimanche d'avril (2 avril 2006)");
    let april2nd2006At1AM = DateTime.now().startOf("day").set({ year: 2006, month: 4, day: 2, hours: 1 });
    await nextStep(
        `let april2nd2006At1AM = DateTime.now().startOf("day").set({ year: 2006, month: 4, day: 2 });`,
        april2nd2006At1AM.toISO()
    );
    await nextStep(
        `april2nd2006At1AM.plus({ hours: 1 })`,
        april2nd2006At1AM.plus({ hours: 1 }).toISO()
    );

    comment("Avant 2007: Recul de l'heure le dernier dimanche d'octobre (29 octobre 2006)");
    let october29th2006At1AM = DateTime.now().startOf("day").set({ year: 2006, month: 10, day: 29, hour: 1 });
    await nextStep(
        `let october29th2006At1AM = DateTime.now().startOf("day").set({ year: 2006, month: 10, day: 29, hour: 1 });`,
        october29th2006At1AM.toISO()
    );

    await nextStep(
        `october29th2006At1AM.plus({ hours: 1 })`,
        october29th2006At1AM.plus({ hours: 1 }).toISO()
    );

    close();
})();