"use strict";
{
    function locOfSmallest(arr, s, e) {
        let i = s;
        let j = i;
        while (i <= e) {
            if (arr[i] < arr[j]) {
                j = i;
            }
            i = i + 1;
        }
        return j;
    }
    function swap(arr, x, y) {
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    function solve(arr) {
        const n = arr.length;
        let i = 0;
        while (i < n - 1) {
            let j = locOfSmallest(arr, i, n - 1);
            swap(arr, i, j);
            i++;
        }
    }
    const arr = [2, 3, 5, 1];
    solve(arr);
    console.log(arr);
}
