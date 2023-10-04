// Pop Operation
#include <iostream>
using namespace std;

int Pop_stack(int stack[], int &top) {
  if (top == -1) {
    cout << "\nStack is Empty, Underfollow!\n";
    return -1;
  }
  int item = stack[top];
  top--;
  return item;
}

int main() {
  int max = 5;
  int top = max - 1;
  int stack[max] = {1, 2, 3, 4, 5};
  while (true) {
    int res = Pop_stack(stack, top);
    if (res == -1)
      break;
    cout << res << " ";
    ;
  }
}