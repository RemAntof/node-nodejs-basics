import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const js_file = path.join(__dirname, 'files','script.js');
const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [js_file, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(childProcess.stdin);
  
    childProcess.stdout.on('data', (data) => {
      process.stdout.write(data);
    });
  
    childProcess.on('exit', (code) => {
      if (code === 0) {
        process.exit(0);
      }
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
