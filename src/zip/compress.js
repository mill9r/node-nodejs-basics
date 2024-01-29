import * as zlib from "zlib";
import {getPathToFile, joinPath} from "./util.js";
import fs from "fs";
import {COMPRESSED_FILE, FILE_TO_COMPRESS} from "./zip.constant.js";

const compress = async () => {

    const inStream = fs.createReadStream(getPathToFile(FILE_TO_COMPRESS));
    const path = joinPath(getPathToFile(''), COMPRESSED_FILE);
    const zlibStream = zlib.createGzip();
    const fileStream = fs.createWriteStream(path);

    inStream.pipe(zlibStream).pipe(fileStream);

};

await compress();
