import {READ_FILE} from "./stream.constant.js";
import {getPathToFile, outputStream} from "./util.js";
import fs from "fs";

const read = async () => {
    const pathToFile = getPathToFile(READ_FILE);
    const readStream = fs.createReadStream(pathToFile);
    readStream.pipe(outputStream)
};

await read();
