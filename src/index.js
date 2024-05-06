import LinkedList from './modules/LinkedList';

const ll = new LinkedList();

ll.prepend(200);
ll.append(100);
ll.append(500);
ll.append(700);

console.log(ll.find(200));
