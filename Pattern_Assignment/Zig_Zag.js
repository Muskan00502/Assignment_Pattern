function printZigZag(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n * 2; j++) {
            if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

printZigZag(5);
