class Node {
  constructor(data) {
    this.data = data; // Data stored in the node
    this.next = null; // Reference to the next node in the list
    this.prev = null; // Reference to the previous node in the list
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null; // Pointer to the head of the list
  }

  // Add a new node with data at the start of the list
  addAtStart(data) {
    const node = new Node(data); // Create a new node
    if (this.head == null) {
      // If the list is empty, set the new node as the head
      this.head = node;
    } else {
      // If the list is not empty, adjust pointers to add the new node at the start
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  // Add a new node with data at the end of the list
  addAtEnd(data) {
    if (this.head == null) {
      // If the list is empty, add the node at the start
      this.addAtStart(data);
      return;
    }
    let newnode = new Node(data); // Create a new node
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newnode; // Add the new node at the end
    newnode.prev = temp;
  }

  // Add a new node with data at a specified position in the list
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
      let newNode = new Node(data); // Create a new node
      let reach = 1;
      let temp = this.head;
      while (reach < pos - 1) {
        temp = temp.next;
        reach += 1;
      }
      newNode.next = temp.next;
      newNode.prev = temp;
      temp.next = newNode; // Insert the new node at the specified position
    }
  }

  // Remove the node at the start of the list
  removeAtStart() {
    if(this.head==null) return;
    this.head = this.head.next; // Update the head to the next node
    if (this.head != null) {
      this.head.prev = null; // Update the prev reference of the new head
    }
  }

  // Remove the node at the end of the list
  removeAtEnd() {
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      this.head = null; // If only one node, remove it
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null; // Remove the last node by setting the next of the second last node to null
  }

  // Remove the node at a specified position in the list
  removeAtRandom(pos) {
    if(this.head==null) return;
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
      if (temp.next != null) {
        temp.next.prev = temp; // Update the prev reference of the next node
      }
    }
  }

  // Display the data of all nodes in the list
  display() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  // Calculate and return the size of the list
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

// Test the doubly linked list
let ll = new doublyLinkedList();

ll.addAtStart(200);
ll.addAtStart(5);
ll.addAtStart(50);
ll.addAtStart(1);
ll.addAtEnd(100);
ll.addAtEnd(1000);
ll.addAtRandom(55, 2);

ll.display(); // Display the list
let c = ll.size();
console.log("Size of LinkedList is :", c);
ll.removeAtRandom(4); // Remove node at position 4
ll.display(); // Display the updated list
let cc = ll.size();
console.log("Size of LinkedList is :", cc); // Display the updated size
