import path from "path";

export function getPathToFile(fileName, folderName = 'files') {
    return path.resolve(folderName, fileName);
}

