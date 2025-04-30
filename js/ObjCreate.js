/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-25 13:47:36
 * @LastEditTime: 2025-04-25 13:55:40
 * @LastEditors: renlirong
 */
// 实现Object.create()

// 我的
function create(proto){
    let newObj = {}
    newObj.__proto__ = proto
    return newObj
}
// 推荐
function create(proto){
    function fn(){} // 构造函数
    fn.prototype = proto
    const newObj = new fn()
    return newObj
}