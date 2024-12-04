import { readInput } from './inputReader';

const filePath = "data/day01/input.txt";

const list1: number[] = [];
const list2: number[] = [];

type NumberMap = {
    [key: number]: number;
}

async function solve() {
    await readInput(filePath, (line: string) => {
        const [num1, num2] = line.split("   ").map(Number);
        list1.push(num1);
        list2.push(num2);
    });

    // group list2 numbers by count
    const list2counts: NumberMap = {};
    for (const num of list2) {
        list2counts[num] = (list2counts[num] || 0) + 1;
    }

    // calculate the similarity score as defined in the puzzle
    const score = list1.reduce(
        (carry, num) => carry + num * (list2counts[num] || 0),
        0
    );

    console.log(`The similarity score is: ${score}`)
}

solve();

