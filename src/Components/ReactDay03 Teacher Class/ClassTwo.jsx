import React, { Component } from 'react'

export default class ClassTwo extends Component {
  clicks = (e, num) => {
    console.log(e, num)
    // 获取事件触发的对象  dom元素
    console.log(e.target)
    e.target.innerHTML = '改变了其中的内容'
  }
  render() {
    return (
      <div>
        ClassTwo
        <button
          onClick={(e) => {
            this.clicks(e, 2)
          }}
        >
          点击获取触发事件的对象
        </button>
      </div>
    )
  }
}
