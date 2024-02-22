

class Node {
    constructor(data){
        this.data =  data;
        this.next = null;

    }
}

class LinkedList{
    constructor(data){
        this.head  = null;
    }

    // adding element at first position
    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // adding element at last position
    addLast(data){
        if(this.head==null){
            this.addFirst(data)
            return
        }
        else{
            let temp = this.head
            while(temp.next){
                temp = temp.next
            }
            let newNode = new Node(data)
            temp.next = newNode
            
        }

    }

    //length of linked list
    size(){
        let count = 0
        let temp = this.head
        while(temp.next){
            count++;
            temp = temp.next;
        }
        count++;
        console.log("Size is :",count);
        return count;
    }

    // adding element at random position
    addAtRandom(index, data){
        let temp = this.head
        let count=1;
        if(index<0){
            console.log("Invalid index. must be greater than 0")
            return 
        }
        if(index>=this.size()){
            console.log("Invalid index. must be smaller than node size")
            return 
        }
        if(index==0){
            this.addFirst(data)
            return
        }
        while(count < index){
            temp = temp.next;
            count++;

        }
        let newNode = new Node(data);
        let newTemp = temp.next
        temp.next = newNode
        newNode.next = newTemp
    }

    // displaying all the data in LinkedList
    display(){
        let temp = this.head
        while(temp.next){
            console.log(temp.data)
            temp = temp.next
        }
        console.log(temp.data)
    }

    removeFirst(){
        let temp = this.head
        this.head = this.head.next;
        temp.next = null;
    }

    removeLast(){
        let temp = this.head
        while(temp.next.next!=null){
            temp = temp.next;
        }
        temp.next=null;
    }

    removeAtRandom(index){
        if(index<0 || index>= this.size()){
            console.log("Invalid index")
            return
        }
        if(index==0){
            this.removeFirst();
            return
        }
    
        let temp = this.head
        let count = 1;
        while(count<index){
            count++;
            temp = temp.next
        }
        let temp2 = temp.next;
        temp.next = temp2.next;
        temp2.next = null;
    }
}

let li = new LinkedList();

li.addFirst(1);
li.addLast(3);
li.addAtRandom(1,1.5)
li.addAtRandom(2,2.5)
li.removeAtRandom(6)
li.display()

// console.log("size after deletion is below" );

