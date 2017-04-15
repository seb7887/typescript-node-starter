import {readFile} from 'fs';
import * as os from 'os';

readFile('./package.json', (err, packageStr) => {
    if (err) {
        console.error('There was a problem reading package json', err);
        return;
    }

    const json = JSON.parse(packageStr.toString());

    console.log(`Running typescript-node-starter version ${json.version}`);
    console.info(`Running on ${os.hostname()} with ${os.cpus().length} CPU's and ${os.totalmem()} mem`);
})
