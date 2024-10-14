/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Create a timeout promise that rejects after t milliseconds
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            // Run the async function and race it against the timeout
            fn(...args)
                .then(result => {
                    clearTimeout(timeout); // Clear the timeout if fn resolves on time
                    resolve(result);
                })
                .catch(err => {
                    clearTimeout(timeout); // Clear the timeout if fn throws an error
                    reject(err);
                });
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */