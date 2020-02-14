/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (const [index, num] of nums.entries()) {
        let value = target-num
        if(map.has(value)) { 
            return [map.get(value), index]
        }
        map.set(num, index)
    }
};

// console.log(twoSum([3,3], 6))