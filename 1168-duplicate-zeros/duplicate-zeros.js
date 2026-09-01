/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let l = 0;
    while (l < arr.length) {
        if (arr[l] === 0) {
            for (let r = arr.length - 1; r > l; r--) {
                arr[r] = arr[r - 1];
            }
            l += 2
        } else {
            l++
        }

    }
    return arr
};