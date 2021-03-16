import Sort from '@src/learn/sort';

describe('insert', () => {
  it('快速排序', async () => {
    const nums = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3];
    const expectNums = [1, 3, 5, 6, 6, 7, 8, 9, 34, 76];
    // const nums2 = Sort.quickSort(nums);
    const nums2 = sort1(nums);
    for (let index = 0; index < nums2.length - 1; index++) {
      expect(expectNums[index] === nums2[index]).toBe(true);
    }
  });
  it('冒泡排序', async () => {
    const nums = [5, 2, 4, 7, 9, 8, 3, 6, 3, 8, 3];
    const expectNums = [2, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9];
    // const nums2 = Sort.bubbleSort(nums);
    const nums2 = sort2(nums);
    for (let index = 0; index < nums2.length - 1; index++) {
      expect(expectNums[index] === nums2[index]).toBe(true);
    }
  });
  it('选择排序', async () => {
    const nums = [6, 45, 3, 2, 5, 6, 8, 4, 3, 4, 56, 67, 5];
    const expectNums = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 45, 56, 67];
    // const nums2 = Sort.selectSort(nums);
    const nums2 = sort3(nums);
    console.log(nums2);
    for (let index = 0; index < nums2.length - 1; index++) {
      expect(expectNums[index] === nums2[index]).toBe(true);
    }
  });
});

const sort1 = (nums: number[]): number[] => {
  const left: number[] = [];
  const right: number[] = [];
  if (nums.length < 2) {
    return nums;
  } else {
    // 除2，向下取整，
    const pivot = Math.floor(nums.length / 2);
    // 取base值
    const base: number = nums.splice(pivot, 1)[0];
    // 根据base值，分左右2个数组
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (element < base) {
        left.push(element);
      } else {
        right.push(element);
      }
    }
    // left + base + right 迭代一个排序的数组
    return sort1(left).concat([base], sort1(right));
  }
};

const sort2 = (nums: number[]): number[] => {
  // 2层遍历，1层 i< length-1
  for (let i = 0; i < nums.length - 1; i++) {
    // 2层 j< length-i-1
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};

const sort3 = (nums: number[]): number[] => {
  let minIndex = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    minIndex = i;
    // 第二次遍历，找i后面最小的一项
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (nums[i] > nums[minIndex]) {
      const temp = nums[i];
      nums[i] = nums[minIndex];
      nums[minIndex] = temp;
    }
  }
  return nums;
};
