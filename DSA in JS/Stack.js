

class Stack {
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        if(this.size()==0) return "Stack is empty";
        return this.stack.pop();
    }

    peek(){
        if(this.size()==0) return "empty stack"

        return this.stack[this.stack.length-1];
    }

    isEmpty(){
        return this.size()==0;
    }

    size(){
        return this.stack.length
    }

    display(){
        let count=0
        while(count!=this.size()){
            console.log(this.stack[count])
            count++
        }
    }


}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.isEmpty());
//console.log(stack.size());
console.log(stack.peek());
//stack.push(100);
console.log(stack.peek());
console.log(stack.size());

console.log("Stack elements are : ");
stack.display()






