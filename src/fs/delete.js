import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(__dirname,'files', fileName);

    if (!fs.existsSync(filePath)) {
        throw new Error('FS operation failed: File does not exist');
    }

    fs.unlink(filePath);

    console.log('File deleted successfully!');
};

await remove();