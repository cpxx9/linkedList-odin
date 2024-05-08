import LinkedList from './modules/LinkedList';

const ll = new LinkedList();

ll.prepend(200);
ll.append(100);
ll.append(500);
ll.append(700);

console.log(ll.toString());
console.log(ll.insertAt(600, 4));
console.log(ll.toString());
ll.removeAt(1);
console.log(ll.toString());
