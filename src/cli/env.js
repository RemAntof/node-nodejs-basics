import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const parseEnv = () => {
    try {
        // Filter environment variables with the prefix RSS_
        const rssEnvVariables = Object.entries(process.env)
            .filter(([key]) => key.startsWith('RSS_'));

        // Print the filtered environment variables in the specified format
        console.log('Filtered environment variables:');
        rssEnvVariables.forEach(([key, value]) => {
            console.log(`RSS_${key}=${value}`);
        });
    } catch (err) {
        console.error('Error:', err.message);
    }
};

parseEnv();