import {Transform} from 'stream';
import {inputStream, outputStream} from "./util.js";

const transform = async () => {
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const content = chunk.toString() ? chunk.toString().split('').reduceRight((acc, v) => `${acc}${v}`, '') : '';
            this.push(content);
            callback();
        }
    })


    inputStream.pipe(transform).pipe(outputStream);
};

await transform();
