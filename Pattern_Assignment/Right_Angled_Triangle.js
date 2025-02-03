

function printTriangle(n) {
    let triangle = '';
    for (let i = 1; i <= n; i++) {
        triangle += '*'.repeat(i) + '\n';
    }
    console.log(triangle);
}

// Example usage
printTriangle(5);


