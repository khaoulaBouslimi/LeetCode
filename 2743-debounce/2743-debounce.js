/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId;  // Variable to track the timeout

    return function(...args) {
        // Clear the previous timer if there is one
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timer to delay the execution of the function
        timeoutId = setTimeout(() => {
            fn(...args);  // Call the original function with the passed arguments
        }, t);
    };
};


/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */