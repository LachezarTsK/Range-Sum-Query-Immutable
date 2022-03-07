
#include <vector>
using namespace std;

class NumArray {
    
public:
    vector<int> sumAllRanges;

    NumArray(vector<int>& nums) {
        const size_t size = nums.size();
        sumAllRanges.resize(size + 1);
        for (int i = 0; i < size; i++) {
            sumAllRanges[i + 1] = sumAllRanges[i] + nums[i];
        }
    }

    int sumRange(int left, int right) {
        return sumAllRanges[right + 1] - sumAllRanges[left];
    }
};
