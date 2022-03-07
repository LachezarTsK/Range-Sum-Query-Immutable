
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    const size = nums.length;
    this.sumAllRanges = new Array(size + 1).fill(0);
    for (let i = 0; i < size; i++) {
        this.sumAllRanges[i + 1] = this.sumAllRanges[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    return this.sumAllRanges[right + 1] - this.sumAllRanges[left];
};
