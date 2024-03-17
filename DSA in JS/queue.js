class Queue {
    constructor(){
        this.queue = []; // Initialize an empty array to store queue elements
    }

    enqueue(data){
        this.queue.push(data); // Add the given data to the end of the queue
    }

    dequeue(){
        if(this.queue.length === 0){
            return "underflow"; // If the queue is empty, return "underflow"
        }

        return this.queue.shift(); // Remove and return the first element from the queue
    }

    front(){
        if(this.queue.length === 0){
            return "underflow No elements in queue"; // If the queue is empty, return "underflow No elements in queue"
        }
        return this.queue[0]; // Return the first element of the queue
    }

    size(){
        return this.queue.length; // Return the number of elements in the queue
    }

    isEmpty(){
        return this.queue.length === 0; // Return true if the queue is empty, false otherwise
    }

    display(){
        let str = ""; // Initialize an empty string to store the elements of the queue
        for(let i = 0; i < this.queue.length; i++){
            str += this.queue[i] + " | "; // Append each element of the queue to the string
        }
        console.log(str); // Display the string containing queue elements
    }
}

const queue = new Queue(); // Create a new instance of the Queue class
queue.enqueue(10); // Enqueue elements into the queue
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue(); // Dequeue elements from the queue
queue.dequeue();
queue.dequeue();
console.log(queue.dequeue()); // Attempt to dequeue from an empty queue
console.log(queue.front()); // Check the front element of the queue
queue.display(); // Display the contents of the queue
