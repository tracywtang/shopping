import React, { Component } from 'react'

export default class ClassFour extends Component {
  // 通过e.target.value拿到input里面的value值
  state = {
    msg: '11',
  }
  change = (e) => {
    console.log(e.target.value)
    this.setState({ msg: e.target.value })
  }
  submit = (e) => {
    // 阻止默认行为提交
    e.preventDefault()
  }
  render() {
    return (
      <div>
        ClassFour
        <form action="" onSubmit={this.submit}>
          <input type="text" onChange={this.change} value={this.state.msg} />
        </form>
        <h1>{this.state.msg}</h1>
      </div>
    )
  }
}
