
public class NumArray {

    int[] sumAllRanges;

    public NumArray(int[] nums) {
        final int size = nums.length;
        sumAllRanges = new int[size + 1];
        for (int i = 0; i < size; i++) {
            sumAllRanges[i + 1] = sumAllRanges[i] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        return sumAllRanges[right + 1] - sumAllRanges[left];
    }
}
