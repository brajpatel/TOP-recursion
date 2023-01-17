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