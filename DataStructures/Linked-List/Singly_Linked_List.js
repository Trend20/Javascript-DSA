// declare node class

class SinglyLinkedListNode{
  constructor(value, next=null){
    this.value = value;
    this.next = next | null;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

// define actual linked-list class
class SingleLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


// Linked List operations

// PUSH
push(val){
  // create new node
  let newNode = new SinglyLinkedListNode(val)
  if(!this.head){
    this.head = newNode;
    this.tail = this.head;
  }else{
    // assign new tail
    this.tail.next = newNode
    this.tail = newNode;
  }
  // increase the length
  this.length++;
  return this;
}

// POP

} 
