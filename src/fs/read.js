import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, 'files', fileName);

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        console.log('File content:');
        console.log(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed: File does not exist');
        } else {
            throw err;
        }
    }
};

    await read();

