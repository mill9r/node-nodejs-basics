import fs from "fs";
import {getPathToFile, isPathExist} from "./util.js";
import {EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";

const list = async () => {
    const folderName = 'files'
    const fileNameStub = ''

    if(!isPathExist(getPathToFile(fileNameStub, folderName))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    fs.readdir(getPathToFile(fileNameStub, folderName), (err, files) => {
        console.log(files);
    })
};

await list();
