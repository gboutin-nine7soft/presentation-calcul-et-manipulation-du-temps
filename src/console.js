const readline = require("readline");
const clc = require("cli-color");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const rlQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

function consoleCyan(x) {
    console.log(clc.cyan(x))
}

const close = () => rl.close();

const prompt = async (message) => {
    await rlQuestion(`${message}`);
};

const output = (message) => {
    consoleCyan(`>>> ${message}`);
};

const nextStep = async (line, result) => {
    await prompt(line);
    output(result);
    await prompt("");
};

const lastStep = async (line, result) => {
    await prompt(line);
    output(result);
    close();
}

const comment = (message) => {
    console.log(clc.blackBright(`/**\n * ${message}\n */ \n`));
    // console.log(clc.blackBright(`// ${message}`));
    // console.log("");
}

const lineComment = (message) => {
    console.log(clc.blackBright(`// ${message}`));
}

module.exports = {
    ...module.exports,
    close, prompt, output, nextStep, lastStep, comment, lineComment
};