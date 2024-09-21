const { spawn } = require('child_process');


export const liveLogs= async () => { 
    try {
        let outputData: any = [];

        const args = [
            'args to pass' 
        ];

        const child = spawn('cmd', args, { 
            cwd: 'Path to dir', 
        });
        console.log(child.pid, "child");
        child.stdout.setEncoding('utf8');
        child.stderr.setEncoding('utf8');

        child.stdout.on('data', (data: any) => {
                console.log(Record Count: ${data.toString()});
        });
        child.on('close', (code: any) => {
            console.log(ARR: ${outputData}, code);
        });
    } catch (error) {
        console.error('Error occurred:', error);
    }
};

liveLogs();
