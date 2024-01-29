import {getArgsAsMap} from "./util.js";

const parseArgs = () => {
    const result = [];
    const paramsStartFrom = 2
    const args = getArgsAsMap(process.argv.slice(paramsStartFrom));
    args.forEach((value, key) => {
        result.push(`${key} is ${value}`);
    });

    console.log(result.join(', '));
};

parseArgs();
