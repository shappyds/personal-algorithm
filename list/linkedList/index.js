class Node {
  constructor(value, node = null) {
    this.value = value
    this.next = node
  }
}

/**
 * 单链表
 */
class LinkedList {
  constructor() {
    this.head = new Node('head')
    this.len = 0
  }

  /**
   * 向链表中新增节点
   * @param {*} val 
   */
  add(val) {
    let node = new Node(val)

    let last = this.head
    while(last.next) {
      last = last.next
    }
    last.next = node
    this.len++

    return node
  }

  /**
   * 往某个节点后新增节点
   * @param {*} val
   * @param {*} newVal
   */
  insert(val, newVal) {
    let node = this.findByValue(val)
    
    if (!node) {
      console.log('没有该节点');
      return   
    }

    let newNode = new Node(newVal)
    newNode.next = node.next
    node.next = newNode
    this.len++
  }

  /**
   * 寻找前一个
   * @param {*} val 
   */
  findPrev(val) {
    let node = this.head.next
    
    while(node && node.next) {
      if(node.next.value === val) {
        return node
      }
      node = node.next
    }

    return null
  }

  /**
   * 移除某个节点
   * @param {*} val 
   */
  remove(val) {
    let node = this.findPrev(val)
    if(!node) {
      console.log('not found')
      return
    }
    this.len--
    node.next = node.next.next
  }

  /**
   * 根据val来查找某个节点
   * @param {*} val 
   */
  findByValue(val) {
    let node = this.head.next
    
    while(node) {
      if(node.value === val) {
        return node
      }
      node = node.next
    }

    return null
  }

  /**
   * 根据index查找节点，从0开始
   * @param {*} index 
   */
  findByIndex(index) {
    let node = this.head.next
    let pos = 0
    while (node && pos !== index) {
      node = node.next
      pos++
    }

    return node ? node : null
  }

  /**
   * 获取当前链表的长度
   */
  getLength() {
    return this.len
  }

  /**
   * 显示所有节点
   */
  display() {
    let node = this.head.next
    
    while(node) {
      console.log('---', node.value)
      node = node.next
    }
  }
}

// Test
const myList = new LinkedList()
myList.add('aaa')
myList.add('bbb')
myList.add('ccc')

myList.insert('bbb', 'ddd')

console.log(myList.getLength());

console.log(myList.display());

myList.remove('bbb')
console.log(myList.display());
console.log(myList.findByIndex(2));