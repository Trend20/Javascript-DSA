// declare node class
export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next | null;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

// define an empty linkedlist
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Linked List operations
  // prepend
  // append
  // delete
  // check if empty

  // PUSH
  push(val) {
    // create new node
    let newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // assign new tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // increase the length
    this.length++;
    return this;
  }

  // POP
  pop(){
    if(!this.head){
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while(current.next){
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return current;
  }
}
