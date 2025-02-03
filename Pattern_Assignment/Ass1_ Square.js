

function printSquare(n) {
    let square = '';
    for (let i = 0; i < n; i++) {
        square += '*'.repeat(n) + '\n';
    }
    console.log(square);
}

// // Example usage
 printSquare(5);

