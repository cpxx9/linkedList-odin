import LinkedList from './modules/LinkedList';

const ll = new LinkedList();

ll.prepend(200);
ll.append(100);
ll.append(500);
ll.append(700);
let currentNode = ll.head;
for (let i = 0; i < ll.getSize(); i += 1) {
  console.log(currentNode);
  currentNode = currentNode.next;
}
console.log(ll.getSize());
console.log(ll.tail());
