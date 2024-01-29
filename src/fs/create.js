import fs from 'fs';
import {callBackStub, getPathToFile, isPathExist} from "./util.js";
import {EXCEPTION_OPERATION_FAILED} from "./fs.constant.js";

const create = async () => {
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';

    if (isPathExist(getPathToFile(fileName))) {
        throw Error(EXCEPTION_OPERATION_FAILED);
    }

    await fs.writeFile(getPathToFile(fileName), fileContent, callBackStub);

};

await create();
