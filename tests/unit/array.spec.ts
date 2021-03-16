// slice

describe('array', () => {
  // slice splice slipt
  it('slice', async () => {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // slice() 方法返回一个新的数组对象，
    // 这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
    // 原始数组不会被改变。
    const nums = ['1', '2', '3', '4', '5'];
    console.log(nums.slice(2)); //["3", "4", "5"]
    console.log(nums.slice(2, 4)); //["3", "4"]
  });
  it('splice', async () => {
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。
    // 此方法会改变原数组。
    const nums = ['1', '2', '3', '4', '5'];
    // 在1位置删除0个，增加一个'Feb'
    nums.splice(1, 0, 'Feb');
    console.log(nums); //['1', 'Feb','2', '3', '4', '5']
    // 在4位置删除一个元素，增加一个May
    nums.splice(4, 1, 'May');
    console.log(nums); //[ '1', 'Feb', '2', '3', 'May', '5' ]
  });
});
