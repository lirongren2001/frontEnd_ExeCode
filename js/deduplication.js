/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 22:32:18
 * @LastEditTime: 2025-04-24 22:41:47
 * @LastEditors: renlirong
 */
// 数组去重


function unique(arr) { 
    let newArr = []
    // 方法一：set
    // newArr = Array.from(new Set(arr))

    // 方法二：indexof / includes
    // arr.forEach(element => {
    //     // if(newArr.indexOf(element) === -1){
    //     if(! newArr.includes(element)){
    //         newArr.push(element)
    //     }
    // });
    // return newArr

    // 方法三：filter()+indexOf()
    // arr.filter((ele,idx)=>{
    //     return arr.indexOf(ele) === idx
    // })
    // return arr

}


const arr1 = [1, 2, 2, '1', null, null, {a:1}, {a:1}]
const arr2 =[1, 2, '1', null, {a:1}]
console.log(unique(arr1))
console.log(unique(arr2))
