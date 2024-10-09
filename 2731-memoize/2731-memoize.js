/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // Store cached values
    let callCount = 0; // Count of total calls

    const memoizedFunction = function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments

        // Check if the result is already in the cache
        if (cache.has(key)) {
            return cache.get(key); // Return cached value
        }

        callCount++; // Increment call count for each unique call
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Cache the result
        return result; // Return the computed result
    };

    // Method to get the call count
    memoizedFunction.getCallCount = function() {
        return callCount;
    };

    return memoizedFunction; // Return the memoized function
}

// Example functions
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Example usage
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2)); // 4 (call)
console.log(memoizedSum(2, 2)); // 4 (cached)
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3 (call)
console.log(memoizedSum.getCallCount()); // 2

const memoFactorial = memoize(factorial);
console.log(memoFactorial(2)); // 2 (call)
console.log(memoFactorial(3)); // 6 (call)
console.log(memoFactorial(2)); // 2 (cached)
console.log(memoFactorial(3)); // 6 (cached)
console.log(memoFactorial.getCallCount()); // 2



/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */