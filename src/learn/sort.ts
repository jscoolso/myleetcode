class Sort {
  /**
   * --- 测试用例 ---
   *
   * 输入：[1, 34, 5, 76, 8, 6, 9, 7, 6, 3]
   * 输出：[1, 3, 5, 6, 6, 7, 8, 9, 34, 76]
   *
   * --- 说明 ---
   *
   * 思考：快速排序是稳定的吗？
   * 解答：base 的每次选择，会导致快排是不稳定排序。
   */
  quickSort = (nums: number[]): number[] => {
    const left: number[] = [];
    const right: number[] = [];
    if (nums.length < 2) {
      return nums;
    } else {
      // 除2，向下取整，
      const pivot = Math.floor(nums.length / 2); // Math.floor 向下取整
      // 取base值
      const base: number = nums.splice(pivot, 1)[0];
      // 根据base值，分左右2个数组
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] < base) {
          left.push(nums[i]);
        } else {
          right.push(nums[i]);
        }
      }
      return this.quickSort(left).concat([base], this.quickSort(right));
    }
  };

  /**
   * --- 测试用例 ---
   *
   * 输入：[5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3]
   * 输出：[2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9]
   *
   * --- 说明 ---
   *
   * 思考：冒泡排序是稳定的吗？
   * 解答：稳定。相等的元素不发生交换
   */

  bubbleSort = (nums: number[]): number[] => {
    // 2层遍历，1层 i< length-1
    for (let i = 0; i < nums.length - 1; i++) {
      // 2层 j< length-i-1
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          const tmp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = tmp;
        }
      }
    }
    return nums;
  };

  /**
   * --- 测试用例 ---
   *
   * 输入：[6, 45, 3, 2, 5, 6, 8, 4, 3, 4, 56, 67, 5]
   * 输出：[2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 45, 56, 67]
   *
   * --- 说明 ---
   *
   * 思考：选择排序是稳定的吗？
   * 解答：要看代码是如何实现的，在本例中由于有交换，所以是不稳定排序。
   */

  selectSort = (nums: number[]): number[] => {
    let idx: number; // 最小值的索引
    for (let i = 0; i < nums.length - 1; i++) {
      idx = i;
      // 第二次遍历，找i后面最小的一项
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[idx]) {
          idx = j;
        }
      }
      if (nums[i] > nums[idx]) {
        const tmp = nums[idx];
        nums[idx] = nums[i];
        nums[i] = tmp;
      }
    }
    return nums;
  };
}

export default new Sort();
