import React, { Component, createRef } from 'react'
// 获取非受控组件的value值
// 1.引入createRef
// 2.使用一个变量保存createRef执行的结果
// 3,在输入框上面绑定一个ref属性
// 4.获取value值，通过current.value
export default class ClassFive extends Component {
  // 非受控组件
  handleRef = createRef()
  click = () => {
    console.log(this.handleRef.current.value)
  }
  render() {
    return (
      <div>
        ClassFive
        <input type="text" ref={this.handleRef} />
        <button onClick={this.click}>点击拿到input里面的value值</button>
      </div>
    )
  }
}
