import fs from 'fs';
import {getPathToFile, isPathExist} from "./util.js";
import {ENCODE_FORMAT, EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";

const read = async () => {
    const fileName = 'fileToRead.txt'

    if (!isPathExist(getPathToFile(fileName))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    fs.readFile(getPathToFile(fileName), ENCODE_FORMAT, (err, data) => {
        console.log(data);
    })

};

await read();
