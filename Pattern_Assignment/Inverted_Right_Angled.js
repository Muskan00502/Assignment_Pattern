function printInvertedTriangle(n) {
    for (let i = n; i > 0; i--) {
        console.log('*'.repeat(i));
    }
}

printInvertedTriangle(5);
