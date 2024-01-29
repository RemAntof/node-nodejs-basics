import { Worker, isMainThread } from 'worker_threads';
import { fileURLToPath } from 'url';
import path from 'path';
import os from 'os';

const performCalculations = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const worker_path = path.join(__dirname,'worker.js')
   
    if (isMainThread) {
        const createWorkers = (numWorkers) => {
          const workers = [];
          for (let i = 0; i < numWorkers; i++) {
            const worker = new Worker(worker_path, { workerData: i + 10 });
            workers.push(worker);
          }
          return workers;
        };

            const numCores = os.cpus().length;
            const workers = createWorkers(numCores);
        
            const results = [];
        
            workers.forEach((worker) => {
              worker.on('message', (result) => {
                results.push(result);

                if (results.length === numCores) {
                  console.log(results);
                }
              });
            });
};
}
await performCalculations();