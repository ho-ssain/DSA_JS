/**

PUSh_STACK (stack, top, max, item)
  1. if top = max then
      print 'stack is full, Overflow' and return
  2. top:= top + 1
  3. stack(top):= item
  4. exit

 */

#include <iostream>
using namespace std;

int PUSH_stack(int stack[], int &top, int max, int item) {
  if (top == max - 1) { // Check if the stack is full
    cout << "Stack is full, Overflow!" << endl;
    return 0;
  }

  top++;             // Increment the top index
  stack[top] = item; // Push the item onto the stack
  return 1;          // Return 1 to indicate success
}

int main() {
  cout << "Push Operation in Stack\n";
  int max = 5;
  int top = -1; // Initialize top to -1 to indicate an empty stack
  int stack[max];
  int item;

  while (true) {
    cout << "Enter an item to push (or any non-integer to exit): ";
    cin >> item;

    if (cin.fail()) {
      cout << "Exiting program." << endl;
      break; // Exit the loop if the input is not an integer
    }

    int res = PUSH_stack(stack, top, max, item);
    if (res == 0)
      break;
  }

  return 0;
}
