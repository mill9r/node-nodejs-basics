import {spawn} from 'child_process'
const spawnChildProcess = async (args) => {
    const child = spawn('node', [...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
// example of the call
// spawnChildProcess( ['./files/script.js',2,3]);
