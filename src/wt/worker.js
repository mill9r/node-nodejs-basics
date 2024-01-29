// n should be received from main thread
import {parentPort, workerData} from "worker_threads";
import {ERROR, RESOLVED} from "../cp/util.js";

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const result = nthFibonacci(workerData)
        parentPort.postMessage({
            status: RESOLVED,
            value: result
        });
    } catch (e) {
        parentPort.postMessage({
            status: ERROR,
            value: null
        });
    }

};

sendResult();
