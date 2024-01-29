import fs from 'fs';
import {callBackStub, getPathToFile, isPathExist} from "./util.js";
import {EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";

const rename = async () => {
    const fileName = 'wrongFilename.txt'
    const newFileName = 'properFilename.md'

    if (!isPathExist(getPathToFile(fileName)) || isPathExist(getPathToFile(newFileName))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    fs.rename(getPathToFile(fileName),getPathToFile(newFileName), callBackStub)

};

await rename();
