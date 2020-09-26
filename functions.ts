function add(number1: number, number2: number): number {
    return number1 + number2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

addAndHandle(12, 34, (result) => {
    console.log(result);
});

let combinedValues: (n1: number, n2: number) => number;

combinedValues = add;

//combinedValues = printResult;

console.log(combinedValues(8, 8));