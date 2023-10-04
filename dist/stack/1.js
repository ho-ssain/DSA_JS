"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Stack {
    constructor(max) {
        this.max = max;
        this.stack = new Array(max);
        this.top = -1;
    }
    push(item) {
        if (this.top === this.max - 1) {
            console.log("Stack is full, Overflow!");
            return;
        }
        this.top++;
        this.stack[this.top] = item;
    }
    pop() {
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
    const promptSync = (0, prompt_sync_1.default)();
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
