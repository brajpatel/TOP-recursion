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

console.log(mergeSort([])) // returns []
console.log(mergeSort([2,5,3,8,7,1,6,4])); // returns [1,2,3,4,5,6,7,8]
console.log(mergeSort([40,20,10,80,30,50,70,60])); // returns [10,20,30,40,50,60,70,80]
console.log(mergeSort([1,27,8,88,99999,2,69,1000])); // returns [1,2,8,27,69,88,1000,99999]
