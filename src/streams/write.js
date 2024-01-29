import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const filePath = path.join(__dirname, 'files','fileToWrite.txt');
    const writableStream = createWriteStream(filePath);
    
    process.stdin.pipe(writableStream);
    
    writableStream.on('finish', () => {
        console.log(`Data written to ${filePath}`);
    });
    
    writableStream.on('error', (error) => {
        console.error(`Error writing data to ${filePath}:`, error.message);
    });
};

await write();