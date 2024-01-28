import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFile = () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    console.log(filePath);
    const fileContent = 'I am fresh and young';

    fs.createWriteStream(filePath).write(fileContent);

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed: File already exists');
    }
    console.log('File created successfully!');
};

try {
    createFile();
} catch (error) {
    console.error(error.message);
}
