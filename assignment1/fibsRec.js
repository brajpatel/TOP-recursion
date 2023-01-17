function fibsRec(n) {
    if(n === 1) return [0];
    if(n === 2) return [0];

    return (n <=1) ? n : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]]

    // return (n == 1) ? [0] : (n === 2) ? [0, 1] : [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]] ====== ONE LINER
}