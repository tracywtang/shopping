import React, { Component } from 'react'

export default class ClassThree extends Component {
  // state里面一般保存数据的
  state = {
    boolean: true,
    str: '123',
  }
  // 修改state里面的值，在类式组件里面通过调用this.setState({str:'456'})
  // useState,下节课会讲到hooks ，useState，useEffect，UseMemo、useCallback,UseRef
  clicks = () => {
    this.setState({ str: '456' })
    this.setState({ boolean: !this.state.boolean })
  }
  render() {
    return (
      <div>
        {this.state.str}
        <h1>{this.state.boolean ? '111111' : '22222222222'}</h1>
        <button onClick={this.clicks}>点击changestate里面的值</button>
      </div>
    )
  }
}
