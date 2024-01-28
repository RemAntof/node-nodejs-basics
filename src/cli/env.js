const parseEnv = () => {
    try {
        const rssEnvVariables = Object.entries(process.env)
            .filter(([key]) => key.startsWith('RSS_'));

        console.log('Filtered environment variables:');
        rssEnvVariables.forEach(([key, value]) => {
            console.log(`RSS_${key}=${value}`);
        });
    } catch (err) {
        console.error('Error:', err.message);
    }
};

parseEnv();