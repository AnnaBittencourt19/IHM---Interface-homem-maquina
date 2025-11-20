let n = parseInt(inp); // Don't change this line

function calculateAndPrintSum() {
    let sum = 0;

    for (let i = 1; i <= 10000; i++) {
        sum += i; 
    }
    console.log(sum);
}
for (let j = 0; j < n; j++) {
    calculateAndPrintSum();
}

