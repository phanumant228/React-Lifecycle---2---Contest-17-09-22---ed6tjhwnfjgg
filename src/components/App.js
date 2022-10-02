import React from 'react'

import '../styles/App.css';


class App extends React.Component {

  handleClick(){
    this.setState({count: this.state.count+1})
  }
  constructor(props){
    super(props)
    this.state = {count:0}
    this.handleClick = this.handleClick.bind(this);

  }
   componentDidMount(){
    console.log("mounted");
  }

  
  render() {
    return (
      <div id="main">
          <div id="count">{this.state.count}</div>
          <button id="incr" onClick={this.handleClick}>Increment</button>
          console.log("moumted")
      </div>
    )
  }
}


export default App;
