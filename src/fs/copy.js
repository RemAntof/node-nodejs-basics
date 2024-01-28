import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const copy = async () => {
    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');
    if (fs.existsSync(destinationFolder)) {
        throw new Error('FS operation failed: Destination folder already exists');
    }
    fs.mkdir(destinationFolder, (err) => {
        if (err) {
            throw err;
        }
        const files = fs.readdirSync(sourceFolder);
        files.forEach((file) => {
            const sourceFilePath = path.join(sourceFolder, file);
            const destinationFilePath = path.join(destinationFolder, file);
            fs.copyFileSync(sourceFilePath, destinationFilePath);
        });
    console.log('Files copied successfully!');

});
}
await copy();
