import Node from './Node';

class LinkedList {
  #size = 0;

  constructor() {
    this.head = null;
  }

  getSize() {
    return this.#size;
  }

  #setSize() {
    this.#size += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.#setSize();
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.#setSize();
  }

  append(value) {
    const newNode = new Node(value);
    if (this.#size === 0) {
      this.head = newNode;
      this.#setSize();
      return;
    }
    let currentNode = this.head;
    for (let i = 0; i < this.#size; i += 1) {
      if (!currentNode.next) {
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
      this.#setSize();
    }
  }

  tail() {
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  at(index) {
    if (!this.head) {
      return console.log('Nothing in this LinkedList');
    }
    if (this.#size < index + 1) {
      return console.log('This LinkedList is too small');
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    let prevNode;
    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    return currentNode;
  }

  contains(testValue) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.data === testValue) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode.next) {
      if (currentNode.data === value) {
        return index;
      }
      currentNode = currentNode.next;
      index += 1;
    }
    if (currentNode.data === value) {
      return index;
    }
    return null;
  }

  toString() {
    let string = "";
    let currentNode = this.head;
    while(currentNode) {
      string += `(${currentNode.data}) -> `;
      currentNode = currentNode.next;
    }
    string  += "null";
    return string;
  }
}

export default LinkedList;
