function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return merge(left, right);
}

function merge(left, right) {
    let mergedArr = [];

    while(left.length > 0 && right.length > 0) {
        let arrWithSmallerVal = left[0] < right[0] ? left : right;
        let nextNum = arrWithSmallerVal.shift();
        mergedArr.push(nextNum);
    }

    return mergedArr.concat(left, right);
}