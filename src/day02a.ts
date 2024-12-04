import { readInput } from './inputReader';
import { sortNumbersAsc, sortNumbersDesc, debug } from "./helpers";

const filePath = "data/day02/input.txt";
debug.disableLogging();

let safe: number = 0;

function validateAllLevelsIncreaseOrDecrease(line: string): boolean {
    const list = line.split(" ").map(Number);

    const asc = list.sort(sortNumbersAsc).join(' ');
    const desc = list.sort(sortNumbersDesc).join(' ');

    if (asc !== line && desc !== line) {
        debug.log(line, "is not safe, because the levels don't all increase/decrease");
        return false;
    }

    return true;
}

function validateAllLevelsAreBetweenOneAndThree(line: string): boolean {
    const list = line.split(" ").map(Number);
    for (let i = 1, len = list.length; i < len; i++) {
        const n1 = list[i - 1];
        const n2 = list[i];
        const diff = Math.abs(n2 - n1);
        if (diff < 1 || diff > 3) {
            debug.log(line, `is not safe, because ${diff} is not between 1 and 3`);
            return false;
        }
    }

    return true;
}

async function solve() {
    await readInput(filePath, (line: string) => {
        if (
            validateAllLevelsIncreaseOrDecrease(line)
            && validateAllLevelsAreBetweenOneAndThree(line)
        ) {
            debug.log(line, "is safe");
            safe++;
        }
    });

    console.log(`There are ${safe} safe reports`);
}

solve();

