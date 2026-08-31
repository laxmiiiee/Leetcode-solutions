/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let l = 0;
    let r = 0;
    while (r < nums.length){
        if (nums[r] === val){
            r++;
        }
        else {
           nums[l] = nums[r];
           r++;
           l++;
        }
    }
    return l;
};