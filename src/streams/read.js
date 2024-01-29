import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files','fileToRead.txt');
    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();