/*  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

var nums = [1,2,3,4]

findRunningSum(nums);

function findRunningSum(nums) {
    var len = nums.length;
    var sumArr = [];
    var sum = 0;
    for (var i=0; i<len; i++){
        sum += nums[i];
        sumArr.push(sum);
    }

    console.log("Running Sum : " + sumArr);
    return sumArr;
};
