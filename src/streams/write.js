import {getPathToFile, inputStream} from "./util.js";
import {WRITE_FILE} from "./stream.constant.js";
import fs from "fs";

const write = async () => {
    const pathToFile = getPathToFile(WRITE_FILE);
    const writeStream = fs.createWriteStream(pathToFile);
    inputStream.pipe(writeStream);
};

await write();
