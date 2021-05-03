//SINGLY LINKED LIST
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        if (this.length === 0) {
            this.head == null;
            this.tail == null;
        }
        return this;
    }
    pop() {
        if (!this.head) return 'EMPTY LINKED LIST';
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return "EMPTY LINKED LIST"
        let oldHead = this.head
        this.head = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this;
    }
    get(index) {
        if (index + 1 > this.length || index < 0) return null;
        let current = this.head;
        let count = 0
        while (count != index) {
            current = current.next;
            count++
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true
        }
        return false;
    }
    insert(index, val) {
        if (val) {
            if (index < 0 || index > this.length) return false;
            if (index === 0) return !!this.unshift(val)
            if (index === this.length) return !!this.push(val)
            let preNode = this.get(index - 1)
            let newNode = new Node(val)
            newNode.next = preNode.next;
            preNode.next = newNode;
            this.length++;
            return true;
        } else {
            return false
        }
    }
    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prevNode = this.get(index - 1);
        let currentNode = prevNode.next;
        prevNode.next = currentNode.next;
        this.length--;
        return currentNode
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr)
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev =null;
        let next;
        for(let i =0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
// list.push("oneee")
// list.push("twoow")
// list.push("threree")
// list.push("fouurrr")
// list.print()
// list.reverse()
// list.print()