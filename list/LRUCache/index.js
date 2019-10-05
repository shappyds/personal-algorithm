const linkedList = require('../linkedList')
const { LinkedList } = linkedList

class LRUCache {
  constructor(n) {
    this.len = n
    this.list = new LinkedList()
  }

  add(val) {
    let node = this.list.findByValue(val)
    
    if(node) {
      console.log('已存在');
      return
    }

    let len = this.list.getLength()

    if(len === this.len) {
      this.list.removeLast()
    }

    this.list.addToHead(val)
  }

  get(val) {
    let node = this.list.findByValue(val)
    if(!node) {
      console.log('not found');
      return
    }

    this.list.remove(val)
    this.list.addToHead(val)
  }

  print() {
    this.list.display()
  }
}


// test

let cache = new LRUCache(3)

cache.add(1)
cache.add(2)
cache.add(3)
cache.print()
cache.get(3)
cache.print()
cache.add(4)
cache.print()