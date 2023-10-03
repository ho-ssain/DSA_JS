"use strict";
{
    function solve(arr) {
        const n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    const arr = [2, 3, 5, 1];
    solve(arr);
    console.log(arr);
}
