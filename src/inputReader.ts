import * as fs from 'fs';
import * as readline from "node:readline";

export type lineProcessor = (line: string) => any;

export async function readInput(filePath: string, processor: lineProcessor) {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({input: fileStream});

    // collect the numbers from each line in two lists
    for await (const line of rl) {
        processor(line);
    }
}
