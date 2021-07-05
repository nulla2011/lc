class Solution:
    def hammingWeight(self, n: int) -> int:
        #print(bin(n)[2:].zfill(32))
        count = 0
        while n > 1:
            if n & 1 == 1:
                count += 1
            n = n >> 1
        if n == 1:
            count += 1
        return count


if __name__ == "__main__":
    n = 128
    s = Solution()
    print(s.hammingWeight(n))