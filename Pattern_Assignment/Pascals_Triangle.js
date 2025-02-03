function printPascalsTriangle(n) {
    let triangle = [[1]];
    
    for (let i = 1; i < n; i++) {
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }
        row.push(1);
        triangle.push(row);
    }
    
    for (let row of triangle) {
        console.log(' '.repeat(n - row.length) + row.join(' '));
    }
}

printPascalsTriangle(5);
