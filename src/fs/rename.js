import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFileName = 'wrongFilename.txt';
    const targetFileName = 'properFilename.md';

    const sourceFilePath = path.join(__dirname,"files", sourceFileName);
    const targetFilePath = path.join(__dirname,"files", targetFileName);
    if (!fs.existsSync(sourceFilePath)) {
        throw new Error('FS operation failed: Source file does not exist');
    }

    if (fs.existsSync(targetFilePath)) {
        throw new Error('FS operation failed: Target file already exists');
    }

    fs.renameSync(sourceFilePath, targetFilePath);

    console.log('File renamed successfully!');
};

await rename();