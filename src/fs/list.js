import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, "files");
        await fs.access(folderPath,err=>{
            if(err){throw new Error('FS operation failed: Folder does not exist')}
             fs.readdir(folderPath,(err,files)=>{
                if(err){throw err}
                console.log('Files in the folder:');
                files.forEach((file) => {
                    console.log(file);
                });
            });
        });

};

await list();