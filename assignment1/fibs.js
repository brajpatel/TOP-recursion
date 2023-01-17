function fibs(n) {
    let arr = [];
    let prevprev = 0;
    let prev = 1;
    let curr;

    for(let i = 0; i < n; i++) {
        arr.push(prevprev);
        curr = prevprev + prev;
        prevprev = prev;
        prev = curr;
    }

    return arr;
}

console.log(fibs(-2)); // returns "[]"
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(5)); // returns [0, 1, 1, 2, 3]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(12)); // returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
