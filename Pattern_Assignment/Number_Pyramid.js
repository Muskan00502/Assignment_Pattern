function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + String(i).repeat(2 * i - 1));
    }
}

printNumberPyramid(4);
