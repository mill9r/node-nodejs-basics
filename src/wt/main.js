import path from "path";
import {cpuCoresCounter, createWorker} from "../cp/util.js";

const performCalculations = async () => {
    const fileName = path.resolve(path.resolve(), 'worker.js');
    const promises = [];

    for (let i = 0; i < cpuCoresCounter; i++) {
        const inputData = cpuCoresCounter + i
        promises.push(createWorker(fileName, inputData))
    }


    Promise.all(promises).then(msg => console.log(msg)).catch(err => `Error occurs during the process of creation worker thread ${err}`)

};

await performCalculations();
