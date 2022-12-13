// declare class

class SinglyLinkedListNode{
  constructor(value, next=null){
    this.value = value;
    this.next = next | null;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}