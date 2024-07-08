import React, { Component } from 'react'
// 快捷创建方式 rcc
export default class ClassOne extends Component {
  // js相关的code要写在return，不需要用let ，var ，const
  // 调用js code时要用到this关键字
  // 生命周期，组件在挂载和渲染（）的时候触发了
  clicks = (num1, num2) => {
    console.log(num1, num2)
  }
  render() {
    return (
      <div>
        ClassOne
        <button
          onClick={this.clicks(1, 2)}
          onMouseOver={() => {
            console.log('2222')
          }}
        >
          点击打印
        </button>
        <hr />
      </div>
    )
  }
}
