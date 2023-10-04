// Queue Operations
#include <iostream>
using namespace std;
const int maxSize = 5;

class Queue {
private:
  int queue[maxSize];
  int front;
  int rear;

public:
  Queue() {
    front = -1;
    rear = -1;
  }

  bool isFull() {
    return (rear == maxSize - 1 && front == 0) || (rear == front - 1);
  }

  bool isEmpty() { return front == -1; }

  void enqueue(int item) {
    if (isFull()) {
      cout << "Queue is Full, Overflow!" << endl;
      return;
    } else if (isEmpty()) {
      front = rear = 0;
    } else if (rear == maxSize - 1) {
      rear = 0;
    } else {
      rear++;
    }
    queue[rear] = item;
    cout << "Enqueued " << item << " into the queue." << endl;
  }

  int dequeue() {
    if (isEmpty()) {
      cout << "Queue is empty, Underflow!" << endl;
      return -1;
    }
    int item = queue[rear];
    if (front == rear) {
      front = rear = -1;
    } else if (front == maxSize - 1) {
      front = 0;
    } else {
      front++;
    }
    return item;
  }
};

int main() {
  Queue q1;
  int choice;

  while (true) {
    cout << "\nQueue Operations\n";
    cout << "1. Enqueue\n";
    cout << "2. Dequeue\n";
    cout << "3. Quit\n";
    cout << "Enter your choice: ";
    cin >> choice;
    switch (choice) {
    case 1: {
      int item;
      cout << "Enter an item to enqueue: ";
      cin >> item;
      q1.enqueue(item);
      break;
    }
    case 2: {
      int dequeuedItem = q1.dequeue();
      if (dequeuedItem != -1) {
        cout << "Dequeued item: " << dequeuedItem << endl;
      }
      break;
    }
    case 3: {
      cout << "Exiting program." << endl;
      return 0;
    }
    default:
      cout << "Invalid choice. Try again." << endl;
      break;
    }
  }
}