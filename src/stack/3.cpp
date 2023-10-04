#include <iostream>
using namespace std;

const int maxStackSize = 5;

class Stack {
private:
  int stack[maxStackSize];
  int top;

public:
  Stack() { top = -1; }
  bool isFull() { return top == maxStackSize - 1; }
  bool isEmpty() { return top == -1; }
  void push(int item) {
    if (isFull()) {
      cout << "Stack is Full, Overflow!" << endl;
      return;
    }
    top++;
    stack[top] = item;
    cout << "Pushed " << item << " onto the stack" << endl;
  }
  int pop() {
    if (isEmpty()) {
      cout << "Stack is Empty, Underflow!" << endl;
      return -1;
    }
    int item = stack[top];
    top--;
    return item;
  }
};

int main() {
  Stack s1;
  int choice;

  while (true) {
    cout << "\nstack Operations\n";
    cout << "1. Push\n";
    cout << "2. Pop\n";
    cout << "3. Quit\n";

    cout << "Enter Your Choice: ";
    cin >> choice;

    switch (choice) {
    case 1: {
      int item;
      cout << "Enter an item to push: ";
      cin >> item;
      s1.push(item);
      break;
    }
    case 2: {
      int poppedItem = s1.pop();
      if (poppedItem != -1) {
        cout << "Popped Item: " << poppedItem << endl;
      }
      break;
    }
    case 3: {
      cout << "Exiting Program." << endl;
      return 0;
    }
    default:
      cout << "Invalid Choice. Try Again." << endl;
      break;
    }
  }
}