import React from 'react'

export default function FunctionOne() {
  // 不需要用到this
  // 函数式组件定义方法需要使用let、var、const
  let clicks = (num) => {
    console.log(num)
  }
  return (
    <div>
      <h1>Function Components</h1>
      <button onClick={clicks(10)}>点击alert</button>
    </div>
  )
}
