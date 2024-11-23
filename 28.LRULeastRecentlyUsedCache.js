// 28. LRU (Least Recently Used) Cache
// Problem: Implement an LRU cache.


class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move to end to show it was recently used
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // Remove least recently used
    }
    this.cache.set(key, value);
  }
}

// Test case
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // Output: 1
lru.put(3, 3);
console.log(lru.get(2)); // Output: -1


// Explanation:
// -Uses a Map to maintain insertion order.
// -Moves accessed keys to the end of the Map and removes the oldest (least recently used) when the cache exceeds its capacity.