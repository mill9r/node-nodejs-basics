import {cpus} from "os";
import {Worker} from "worker_threads";

export const RESOLVED = 'resolved';
export const ERROR = 'error'

export const cpuCoresCounter = cpus().length;

export const createWorker = (filename, workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(filename, {workerData});
        worker.on("message", resolve);
        worker.on("error", reject);
    })
}
