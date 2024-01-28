import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createFile = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    console.log(filePath);
    const fileContent = 'I am fresh and young';

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed: File already exists');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    await fs.writeFile(filePath, fileContent);

    console.log('File created successfully!');
};

await createFile();

