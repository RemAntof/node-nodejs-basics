import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const sourceFileName = 'wrongFilename.txt';
    const targetFileName = 'properFilename.md';

    const sourceFilePath = path.join(__dirname, 'files', sourceFileName);
    const targetFilePath = path.join(__dirname, 'files', targetFileName);

try{
    await fs.rename(sourceFilePath, targetFilePath);
    console.log('File renamed successfully!');

}catch (err) {
        throw new Error('FS operation failed: Target file already exists');
}
};
  await rename();

