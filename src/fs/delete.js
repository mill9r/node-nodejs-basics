import fs from 'fs';
import {callBackStub, getPathToFile, isPathExist} from "./util.js";
import {EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";
const remove = async () => {
    const fileName = 'fileToRemove.txt';
    if(!isPathExist(getPathToFile(fileName))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    fs.unlink(getPathToFile(fileName), callBackStub)
};

await remove();
