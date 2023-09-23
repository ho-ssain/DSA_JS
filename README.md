# DSA_JS

## Big-O

=> The big-O notation measures the worst case complexity of an algorithm. It tells, how efficient an algorithm is.

=> The question asked with big-O is the following. "What will hapen if n approaches infinity?" (n means inputs)

## some common Big-O notations

![Figure 1](./img/fig-1.png)

O(1) -: does not change with respect to input size.
Hence, O(1) is refered to as being constant time.
Example: accessing an item in an array by it's index.

O(n) -: is linear time and applies to algo that must do n operations in the worst-case scenario.
Example: printing numbers from 0 to n-1 for an array.

if there is 2 nested loop than it's O(n^2)
and if n nested loop than it's O(n^n)

Pattern Questions

Print these patterns using loops:

```text

1.  *****
    *****
    *****
    *****
    *****


2.  *
    **
    ***
    ****
    *****


3.  *****
    ****
    ***
    **
    *


4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5


5.  *
    **
    ***
    ****
    *****
    ****
    ***
    **
    *


6.       *
        **
       ***
      ****
     *****


7.   *****
      ****
       ***
        **
         *


8.      *
       ***
      *****
     *******
    *********


9.  *********
     *******
      *****
       ***
        *


10.      *
        * *
       * * *
      * * * *
     * * * * *


11.  * * * * *
      * * * *
       * * *
        * *
         *


12.  * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *


13.      *
        * *
       *   *
      *     *
     *********


14.  *********
      *     *
       *   *
        * *
         *


15.      *
        * *
       *   *
      *     *
     *       *
      *     *
       *   *
        * *
         *


16.           1
            1   1
          1   2   1
        1   3   3   1
      1   4   6   4   1


17.      1
        212
       32123
      4321234
       32123
        212
         1


18.   **********
      ****  ****
      ***    ***
      **      **
      *        *
      *        *
      **      **
      ***    ***
      ****  ****
      **********


19.    *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *


20.    ****
       *  *
       *  *
       *  *
       ****

21.    1
       2  3
       4  5  6
       7  8  9  10
       11 12 13 14 15

22.    1
       0 1
       1 0 1
       0 1 0 1
       1 0 1 0 1

23.        *      *
         *   *  *   *
       *      *      *

24.    *        *
       **      **
       * *    * *
       *  *  *  *
       *   **   *
       *   **   *
       *  *  *  *
       * *    * *
       **      **
       *        *

25.       *****
         *   *
        *   *
       *   *
      *****

26.   1 1 1 1 1 1
      2 2 2 2 2
      3 3 3 3
      4 4 4
      5 5
      6

27.   1 2 3 4  17 18 19 20
        5 6 7  14 15 16
          8 9  12 13
            10 11

28.      *
        * *
       * * *
      * * * *
     * * * * *
      * * * *
       * * *
        * *
         *

29.
       *        *
       **      **
       ***    ***
       ****  ****
       **********
       ****  ****
       ***    ***
       **      **
       *        *

30.         1
          2 1 2
        3 2 1 2 3
      4 3 2 1 2 3 4
    5 4 3 2 1 2 3 4 5


31.      4 4 4 4 4 4 4
         4 3 3 3 3 3 4
         4 3 2 2 2 3 4
         4 3 2 1 2 3 4
         4 3 2 2 2 3 4
         4 3 3 3 3 3 4
         4 4 4 4 4 4 4

32.    E
       D E
       C D E
       B C D E
       A B C D E

33.    a
       B c
       D e F
       g H i J
       k L m N o

34.    E D C B A
       D C B A
       C B A
       B A
       A

35.    1      1
       12    21
       123  321
       12344321
```

## integer Rounding

=> integr division does not work in JS.
for example-: 5 / 4 => 1.25

=> so for this we need Math object.

Math.floor = rounds down to nearest integer
Math.round = rounds to nearest integer
Math.ceil = rounds up to nearest integer

Example-:

Math.floor(0.9) // 0
Math.floor(1.1) // 1

Math.round(0.499) // 0
Math.round(0.5) // 1

Math.ceil(0.1) // 1
Math.ceil(0.9) // 1

## Maximums

Number.MAX_SAFE_INTEGER = largest integer

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true
because it can't go any higher

but it does not work for floating-point decimals

Number.MAX_SAFE_INTEGER + 1.1223 === Number.MAX_SAFE_INTEGER + 4.3322 // false

## Size Summary

```text
-infinity < Number.MIN_SAFE_INTEGER < Number.Min_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < infinity

```
