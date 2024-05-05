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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
  }
}

export default LinkedList;
