// objs are type of hash tables

// idempotent - means given same input function gives same output

// hash functions are usually O(1)
/*
 One of the main problems with hash tables is collisions. Collisions caused linked lists to keep
 the entries in the same memory addresses. If you have collision it becomes O(n/k) where k is size of 
 hash table. So O(n)
 */

/* 
 Obj in js only lets you save strings as keys. Map will let you use any type as the key. 
 Map also maintains insertion order.
 Sets only store keys not values 
*/
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    let address = this._hash(key);

    const currBucket = this.data[address];
    if (currBucket) {
      for (let i = 0; i < currBucket.length; i++) {
        if (currBucket[i][0] === key) {
          console.log("found: ", currBucket[i][1]);
          return currBucket[i][1];
        }
      }
    }
    console.log("Nothing found with that key!");
    return undefined;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    console.log("key: ", key, " value: ", value, " inserted");
    return this.data;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]);
      }
    }
    console.log("Keys: ", keysArr);
    return keysArr;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
myHashTable.keys();
