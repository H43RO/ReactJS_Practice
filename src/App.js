import React from 'react';

//Class Component
class App extends React.Component{
  //동적으로 변하는 데이터가 들어가는 'State'
  //state의 데이터가 변하면 render 재호출 (with virtual DOM)
  state = {
    count: 0
  };

  add = () => {
    this.setState( current => ({count: current.count + 1}) );
  };

  minus = () => {
    this.setState( current => ({ count: current.count - 1}) );
  };

  //화면에 표시할 부분을 render method에 넣어야함 (React가 화면 구성시 자동으로 실행)
  render(){
    return <div>
              <h1>The number is : {this.state.count}</h1>
              <button onClick={this.add}>Add</button>
              <button onClick={this.minus}>Minus</button>
           </div>
  }
}

export default App;