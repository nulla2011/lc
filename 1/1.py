from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for i in range(0, length):
            for j in range(i + 1, length):
                if (nums[j] == target - nums[i]):
                    return [i, j]


if __name__ == "__main__":
    nums = [3, 2, 4]
    target = 6
    s = Solution()
    print(s.twoSum(nums, target))
