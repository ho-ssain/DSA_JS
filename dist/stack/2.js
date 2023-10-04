"use strict";
const toh = (N, from_rod, to_rod, aux_rod) => {
    if (N === 1) {
        console.log(`move disk 1 from rod ${from_rod} to rod ${to_rod}`);
        return 1;
    }
    const moves1 = toh(N - 1, from_rod, aux_rod, to_rod);
    console.log(`move disk ${N} from rod ${from_rod} to rod ${to_rod}`);
    const moves2 = toh(N - 1, aux_rod, to_rod, from_rod);
    return moves1 + moves1 + 1;
};
const main = () => {
    const N = 3;
    const total_moves = toh(N, "1", "3", "2");
    console.log(total_moves);
};
main();
