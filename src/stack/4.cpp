// Program for Tower of Hanoi Algorithm

// The idea is to use the helper node to reach the destination using recursion.
// Below is the pattern for this problem:

// Shift ‘N-1’ disks from ‘A’ to ‘B’, using C.
// Shift last disk from ‘A’ to ‘C’.
// Shift ‘N-1’ disks from ‘B’ to ‘C’, using A.

#include <iostream>
using namespace std;

int toh(int N, char from_rod, char to_rod, char aux_rod) {
  if (N == 1) {
    cout << "move disk 1 from rod " << from_rod << " to rod" << to_rod << endl;
    return 1;
  }
  int moves1 = toh(N - 1, from_rod, aux_rod, to_rod);
  cout << "move disk " << N << " from rod" << from_rod << " to rod" << to_rod;
  cout << endl;

  int moves2 = toh(N - 1, aux_rod, to_rod, from_rod);

  return moves1 + 1 + moves2;
}

int main() {
  int N = 3;
  int total_moves = toh(N, '1', '3', '2');
  cout << total_moves << endl;
  return 0;
}