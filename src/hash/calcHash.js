import fs from 'fs';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files','fileToCalculateHashFor.txt');
    const hash = crypto.createHash('SHA256');


        const stream = fs.createReadStream(filePath);

        stream.on('data', (data) => {
            hash.update(data);
        });

        stream.on('end', () => {
            const hashResult = hash.digest('hex');
            console.log(hashResult)
        });
};

await calculateHash();