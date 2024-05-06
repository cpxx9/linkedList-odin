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
}

export default LinkedList;
