import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');

    try {
        await fs.access(destinationFolder);
        throw new Error('FS operation failed: Destination folder already exists');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    await fs.mkdir(destinationFolder);

    const files = await fs.readdir(sourceFolder);
    
    await Promise.all(files.map(async (file) => {
        const sourceFilePath = path.join(sourceFolder, file);
        const destinationFilePath = path.join(destinationFolder, file);

        await fs.copyFile(sourceFilePath, destinationFilePath);
    }));

    console.log('Files copied successfully!');
};

    await copy();

