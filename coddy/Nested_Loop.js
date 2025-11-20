let n = parseInt(inp); // Don't change this line

// Write your code below
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        if (i + j === n) {
            console.log(i, j);
        }
    }
}