from typing import List


class Solution:
    def count1(self, num):
        c = 0
        while num > 1:
            if (num & 1) == 1:
                c += 1
            num = num >> 1
        if num == 1:
            c += 1
        return c

    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        if turnedOn == 0:
            return ["0:00"]
        else:
            results = []
            for h in range(12):
                for m in range(60):
                    if self.count1(h) + self.count1(m) == turnedOn:
                        if m < 10:
                            r = f"{h}:0{m}"
                        else:
                            r = f"{h}:{m}"
                        results.append(r)
            return results


if __name__ == "__main__":
    s = Solution()
    n = 2
    print(s.readBinaryWatch(n))
