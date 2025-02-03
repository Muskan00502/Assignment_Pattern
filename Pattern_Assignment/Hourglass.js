function printHourglass(n) {
    for (let i = n; i > 0; i--) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
    for (let i = 2; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
}

printHourglass(4);
