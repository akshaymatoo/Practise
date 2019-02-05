class Stack {
  constructor(main, supporting) {
    this.main = main;
    this.supporting = supporting;
  }

  get printStack() {
    console.log(this.main);
  }
  // Getter
  get Minimum() {
    return this.supporting[this.supporting.length-1];
  }

  pop() {
    if(this.main)
    if(this.main[this.main.length-1] == this.supporting[this.supporting.length-1])
       this.supporting.pop();

    return this.main.pop();
  }
  // Method
  push(element) {
    //console.log(this.main)
    if(this.main.length == 0){
      this.main.push(element);
      this.supporting.push(element);
    }
    else
    this.main.push(element);

    if(element < this.supporting[this.supporting.length-1])
      this.supporting.push(element);
  }
}

const stack = new Stack([], []);

stack.push(50);
stack.push(40);
stack.push(35);
stack.push(55);
stack.push(37);
console.log("------1------",stack.Minimum);
stack.push(20);
console.log("------2.1-------",stack.Minimum);
stack.pop();
stack.pop();

console.log("------2-------",stack.Minimum);

stack.push(60);
stack.pop();
stack.push(10);

console.log("------3-------",stack.Minimum);
stack.printStack
