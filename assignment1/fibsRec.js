function fibsRec(n) {
    if(n === 1) return [0];
    if(n === 2) return [0];

    return (n <=1) ? n : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]

    // return (n == 1) ? [0] : (n === 2) ? [0, 1] : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]] ====== ONE LINER
}

console.log(fibsRec(-2)); // returns "[]"
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(5)); // returns [0, 1, 1, 2, 3]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(12)); // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
