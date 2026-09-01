/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let p = 0;
    while (p < arr.length){
        if (arr[p] === 0){
            arr.splice(p+1,0,0);
            arr.pop()
            p += 2
        }else{
            p++
        }
       
    }
    return arr
};