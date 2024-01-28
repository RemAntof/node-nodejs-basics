import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const compressedFile = path.join(__dirname, 'files','archive.gz');
    const outputFile = path.join(__dirname, 'files','fileToCompress.txt');
    
    const readStream = fs.createReadStream(compressedFile);
    const gunzipStream = zlib.createGunzip();
    const writeStream = fs.createWriteStream(outputFile);
    
    readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();