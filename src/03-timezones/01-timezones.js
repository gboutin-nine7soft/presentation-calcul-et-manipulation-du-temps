var {DateTime} = require('luxon');
const { nextStep, close, comment } = require("../console");

(async () => {
    const now = DateTime.now();
    await nextStep(
        `const now = DateTime.now();`,
        now.toISO()
    );

    await nextStep(
        `now.zoneName`,
        now.zoneName
    );

    await nextStep(
        `now.toUTC()`,
        now.toUTC().toISO()
    );

    await nextStep(
        `now.toUTC().zoneName`,
        now.toUTC().zoneName
    );

    const nowUTC = DateTime.utc();
    await nextStep(
        `const nowUTC = DateTime.utc();`,
        nowUTC.toISO()
    );

    await nextStep(
        `now < nowUTC`,
        now < nowUTC ? "true" : "false"
    );

    await nextStep(
        `now > nowUTC`,
        now > nowUTC ? "true" : "false"
    );

    const nowParis = nowUTC.setZone("Europe/Paris");
    await nextStep(
        `const nowParis = nowUTC.setZone("Europe/Paris");`,
        nowParis.toISO()
    );

    const nowIndia = nowUTC.setZone("Asia/Kolkata");
    await nextStep(
        `const nowIndia = nowUTC.setZone("Asia/Kolkata");`,
        nowIndia.toISO()
    );

    await nextStep(
        `nowParis > nowIndia`,
        nowParis > nowIndia ? "true" : "false"
    );

    await nextStep(
        `nowParis < nowIndia`,
        nowParis < nowIndia ? "true" : "false"
    );

    await nextStep(
        `nowParis == nowIndia`,
        nowParis == nowIndia ? "true" : "false"
    );

    await nextStep(
        `nowParis.toSeconds() === nowIndia.toSeconds()`,
        nowParis.toSeconds() === nowIndia.toSeconds() ? "true" : "false"
    );

    const laterInParis = nowParis.plus({ hours: 1, minutes: 30 });
    await nextStep(
        `const laterInParis = nowParis.plus({ hours: 1, minutes: 30 });`,
        laterInParis.toISO()
    );

    const earlierInIndia = nowIndia.minus({ hours: 2 });
    await nextStep(
        `const earlierInIndia = nowIndia.minus({ hours: 2 });`,
        earlierInIndia.toISO()
    );

    await nextStep(
        `laterInParis > earlierInIndia`,
        laterInParis > earlierInIndia ? "true" : "false"
    );

    await nextStep(
        `laterInParis < earlierInIndia`,
        laterInParis < earlierInIndia ? "true" : "false"
    );

    await nextStep(
        `laterInParis.toUTC()`,
        laterInParis.toUTC().toISO(),
    );

    await nextStep(
        `earlierInIndia.toUTC()`,
        earlierInIndia.toUTC().toISO(),
    );

    close();
})();

