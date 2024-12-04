import { readInput } from './inputReader';

const filePath = "data/day01/input.txt";

const list1: number[] = [];
const list2: number[] = [];

type NumberMap = {
    [key: number]: number;
}

function sortByNumber(a: number, b: number): number {
    return a - b;
}

async function solve() {
    await readInput(filePath, (line: string) => {
        const [num1, num2] = line.split("   ").map(Number);
        list1.push(num1);
        list2.push(num2);
    });

    // sort lists
    list1.sort(sortByNumber);
    list2.sort(sortByNumber);

    // group list2 numbers by count
    const list2counts: NumberMap = {};
    for (const num of list2) {
        list2counts[num] = (list2counts[num] || 0) + 1;
    }

    const score = list1.reduce(
        (carry, num) => carry + num * (list2counts[num] || 0),
        0
    );

    console.log(`The similarity score is: ${score}`)
}

solve();

