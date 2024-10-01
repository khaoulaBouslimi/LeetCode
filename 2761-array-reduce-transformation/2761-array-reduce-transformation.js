/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;  // Start with the initial value
  
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);  // Apply the function and update the accumulator
    }
    
    return val;  // Return the final accumulated value

};

