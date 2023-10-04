import prompt from "prompt-sync";

class Stack {
  private stack: number[];
  private top: number;
  private max: number;

  constructor(max: number) {
    this.max = max;
    this.stack = new Array(max);
    this.top = -1;
  }

  push(item: number): void {
    if (this.top === this.max - 1) {
      console.log("Stack is full, Overflow!");
      return;
    }
    this.top++;
    this.stack[this.top] = item;
  }
  pop(): number {
    if (this.top === -1) {
      console.log("Stack is Empty, Underflow!");
      return -1;
    }
    const item = this.stack[this.top];
    this.top--;
    return item;
  }
}

const main = () => {
  const max = 5;
  const stack = new Stack(max);
  const promptSync = prompt();

  while (true) {
    console.log("stack Operations:");
    console.log("1. Push");
    console.log("2. Pop");
    console.log("3. Quit");
    const choice = parseInt(promptSync("Enter Your Choice: "));

    switch (choice) {
      case 1: {
        const item = parseInt(promptSync("Enter an item to push: "));
        stack.push(item);
        break;
      }
      case 2: {
        const poppedItem = stack.pop();
        if (poppedItem !== -1) {
          console.log(`Popped Item: ${poppedItem}`);
        }
        break;
      }
      case 3: {
        console.log("Exiting Program.");
        return;
      }
      default:
        console.log("Invalid Choice. Try Again.");
        break;
    }
  }
};

main();
