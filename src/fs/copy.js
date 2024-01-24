import fs from "fs";
import {callBackStub, getPathToFile, isPathExist} from "./util.js";
import {EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";

const copy = async () => {
    const folderFrom = 'files'
    const folderTo = 'files_copy'
    const fileNameStub = ''

    if (!isPathExist(getPathToFile(fileNameStub, folderFrom)) || isPathExist(getPathToFile(fileNameStub, folderTo))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    fs.mkdirSync(getPathToFile(fileNameStub, folderTo))
    fs.cp(getPathToFile(fileNameStub, folderFrom), getPathToFile(fileNameStub, folderTo), {recursive: true}, callBackStub)

};

await copy();
