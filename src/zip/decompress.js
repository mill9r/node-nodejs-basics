import fs from "fs";
import {getPathToFile, joinPath} from "./util.js";
import zlib from "zlib";
import {COMPRESSED_FILE, FILE_TO_COMPRESS} from "./zip.constant.js";

const decompress = async () => {
    const inStream = fs.createReadStream(getPathToFile(COMPRESSED_FILE));
    const path = joinPath(getPathToFile(''), FILE_TO_COMPRESS);
    const zlibStream = zlib.createUnzip();
    const fileStream = fs.createWriteStream(path);

    inStream.pipe(zlibStream).pipe(fileStream);
};

await decompress();
