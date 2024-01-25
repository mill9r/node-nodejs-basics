import * as crypto from "crypto";
import {HASH_ALGORITHM, HASH_ENCODING, PATH_TO_FILE} from "./hash.constant.js";
import {getPathToFile} from "./util.js";
import fs from "fs";

const calculateHash = async () => {
    const hash = crypto.createHash(HASH_ALGORITHM);
    const fileToCalculateHash = fs.createReadStream(getPathToFile(PATH_TO_FILE));
    fileToCalculateHash.on('data', (data) => {
        const calculatedHash = hash.update(data).digest(HASH_ENCODING)
        console.log(calculatedHash) ;
    });
};

await calculateHash();
