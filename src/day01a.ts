import { readInput } from './inputReader';
import { sortNumbersAsc } from "./helpers";

const filePath = "data/day01/input.txt";

const list1: number[] = [];
const list2: number[] = [];

async function solve() {
    await readInput(filePath, (line: string) => {
        const [num1, num2] = line.split("   ").map(Number);
        list1.push(num1);
        list2.push(num2);
    });

    // sort lists
    list1.sort(sortNumbersAsc);
    list2.sort(sortNumbersAsc);

    // console.log(list1, list2);

    // compare the 2 lists and sum the difference per key
    const diffSum = list1.reduce(
        (carry, num, i) => carry + Math.abs(num - list2[i]),
        0
    );

    console.log("Sum of absolute differences:", diffSum);
}

solve();

