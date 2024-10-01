/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val === otherVal) {
                return true; // Values are equal
            } else {
                throw new Error("Not Equal"); // Values are not equal
            }
        },
        notToBe: function(otherVal) {
            if (val !== otherVal) {
                return true; // Values are not equal
            } else {
                throw new Error("Equal"); // Values are equal
            }
        }
    };
};

// Usage examples
try {
    console.log(expect(5).toBe(5)); // Outputs: true
} catch (e) {
    console.error(e.message); // In case of failure
}

try {
    expect(5).notToBe(5); // This will throw "Equal"
} catch (e) {
    console.error(e.message); // Outputs: "Equal"
}

try {
    console.log(expect(5).notToBe(6)); // Outputs: true
    console.log("Values are not equal."); // Outputs: "Values are not equal."
} catch (e) {
    console.error(e.message); // In case of failure
}
