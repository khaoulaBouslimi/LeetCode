/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnedArray = [];
    for (let i in arr){
        returnedArray.push(fn(arr[i], Number(i)));
    }
    return returnedArray;
    
};