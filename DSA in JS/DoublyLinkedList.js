class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
  }

  addAtStart(data) {
    const node = new Node(data);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  addAtEnd(data) {
    if (this.head == null) {
      this.addAtStart(data);
      return;
    }
    let newnode = new Node(data);
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newnode;
    newnode.prev = temp;
  }

  addAtRandom(data, pos) {
    if (pos > this.size()) {
      console.log("The Position", pos, "is Invalid Position");
      return;
    }
    if (pos < 1) {
      console.log("The Position", pos, "is Invalid Position");
      return;
    }
    if (pos == 1) {
      this.addAtStart(data);
    }
    if (pos > 1) {
      let newNode = new Node(data);
      let reach = 1;
      let temp = this.head;
      while (reach < pos - 1) {
        temp = temp.next;
        reach += 1;
      }
      newNode.next = temp.next;
      newNode.prev = temp;
      temp.next = newNode;
    }
  }

  removeAtStart() {
    this.head = this.head.next;
    this.head.prev = null;
  }

  removeAtEnd() {
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  removeAtRandom(pos) {
    if (pos > this.size()) {
      console.log("The Position", pos, "is Invalid Position");
      return;
    }
    if (pos < 1) {
      console.log("The Position", pos, "is Invalid Position");
      return;
    }
    if (pos == 1) {
      this.removeAtStart();
    }
    if (pos > 1) {
      let reach = 1;
      let temp = this.head;
      while (reach < pos - 1) {
        temp = temp.next;
        reach += 1;
      }
      let newTemp = temp.next.next;
      temp.next = temp.next.next;
      newTemp.prev = temp;
    }
  }

  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  size() {
    let temp = this.head;
    let count = 0;
    while (temp != null) {
      temp = temp.next;
      count++;
    }
    return count;
  }
}

let ll = new doublyLinkedList();

ll.addAtStart(200);
ll.addAtStart(5);
ll.addAtStart(50);
ll.addAtStart(1);
ll.addAtEnd(100);
ll.addAtEnd(1000);
ll.addAtRandom(55, 2);

ll.display();
let c = ll.size();
console.log("Size of LinkedList is :", c);
// ll.removeAtEnd()
ll.removeAtRandom(4);

ll.display();
let cc = ll.size();
console.log("Size of LinkedList is :", cc);
