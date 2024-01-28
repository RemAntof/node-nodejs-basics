import fs from 'fs';
import zlib from 'zlib';
import { fileURLToPath } from 'url';
import path from 'path';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const compressedFile = path.join(__dirname, 'files','archive.gz');
    const filePath = path.join(__dirname, 'files','fileToCompress.txt');
    
    const readStream = fs.createReadStream(filePath);
    const gzipStream = zlib.createGzip();
    const writeStream = fs.createWriteStream(compressedFile);
    
    readStream.pipe(gzipStream).pipe(writeStream);
    
    
    writeStream.on('error', (error) => {
        console.error(`Error compressing file: ${error.message}`);
    });
};

await compress();