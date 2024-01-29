import path from "path";
import fs from "fs";

export function isPathExist(fileName, cb = getPathToFile) {
    return fs.existsSync(cb(fileName));
}

export function getPathToFile(fileName, folderName = 'files') {
    return path.resolve(folderName, fileName);
}

export function joinPath(filePath, fileName) {
    return path.join(filePath, fileName);
}

export function callBackStub() {
}
