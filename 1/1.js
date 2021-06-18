/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    length=nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i+1; j < length; j++) {
            if (nums[i]+nums[j]==target){
                return [i,j];
            }
        }
    }
};

nums = [2,7,11,15];
target = 9;
console.log(twoSum(nums, target)); 
