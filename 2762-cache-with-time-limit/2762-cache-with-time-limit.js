var TimeLimitedCache = function() {
    this.cache = new Map(); // To store key-value pairs and expiration times
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration - in milliseconds
 * @return {boolean}
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let isExisting = this.cache.has(key) && this.cache.get(key).expiration > Date.now();
    
    this.cache.set(key, {
        value: value,
        expiration: Date.now() + duration
    });
    
    return isExisting;
};

/** 
 * @param {number} key
 * @return {number}
 */
TimeLimitedCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1;
    
    let entry = this.cache.get(key);
    if (Date.now() > entry.expiration) {
        this.cache.delete(key);
        return -1;
    }
    
    return entry.value;
};

/** 
 * @return {number}
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0;
    
    for (let [key, entry] of this.cache) {
        if (Date.now() <= entry.expiration) {
            count++;
        } else {
            this.cache.delete(key); // Clean up expired keys
        }
    }
    
    return count;
};
