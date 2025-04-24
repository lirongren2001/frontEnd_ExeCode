/*
 * @Description: 
 * @Author: renlirong
 * @Date: 2025-04-24 20:06:37
 * @LastEditTime: 2025-04-24 20:15:32
 * @LastEditors: renlirong
 */
// 组件复用：Modal弹窗
// 需求：实现可复用的Modal组件
// 要求：
// 通过portal实现
// 点击遮罩层可关闭
// 阻止冒泡
// 支持任意子内容
import ReactDOM from 'react-dom'
function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null
    // createPortal 允许你将 JSX 作为 children 渲染至 DOM 的不同部分。第二个参数是位置domNode
    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top:0,
            left:0,
            bottom:0,
            right:0,
            backgroundColor:'gray'
        }} onClick={onClose}> // 点击遮罩层关闭
            <div style = {{
            backgroundColor:'white'
            }} onClick={(e)=>{e.stopPropagation()}}> // 阻止冒泡
                {children}
            </div>

        </div>,
        document.body // 前面的子节点（jsx）被放置在document.body中
    )
}

// 使用示例：
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <h2>Title</h2>
  <p>Content</p>
</Modal>