// function merge() {

// }
// JS 变量的类型是由值来决定的，弱类型
// m + n <= nums1.length
const merge = (nums1, m, nums2, n) => { // 箭头函数 es6
    // 把nums2 合并到nums1中
    // [1,2,3,0,0,0]
    // 重新排序
    // 多定义一个变量
    // let current2 = 0; // 定义一个指针
    // for (let i = nums1.length - n; i <= nums1.length - 1; i++) {
    //     nums1[i] = nums2[current2++]; // 好理解 nums2 有个可遍历
        
    // }
    // // console.log(nums1);
    // return nums1.sort((a, b) => a - b)
    // sort((a, b) => a - b)是一个回调函数, 回调函数有2个参数, 
    // 分别是当前数组元素与其前一个数组元素, 也就是代码里的a 和 b, 
    // 数组的返回值决定了是否要交换 a 和 b 在数组中的顺序, 
    // 返回值小于0就表示要交换 a 和 b 在数组中的顺序, 否则不交换顺序
    let i = m - 1
    let j = n - 1
    let k = m + n -1
    for(; i >= 0 && j >= 0 ; k--) {
        if(nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
    }
    for(; j >= 0; k--) {
        nums1[k] = nums2[j]
        j--
    }
    return nums1
}

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));