import React, { Component } from 'react';
import './App.css';
import DesertContainer from './components/desert_container'
import {connect} from 'react-redux'
import {increaseCounter} from './actions'

class App extends Component {

  // componentDidMount = () => {
  //   setInterval(this.tick, 1000);
  // }
  //
  // tick = () => {
  //   this.props.increaseCounter(this.props.counter)
  // }

  render() {
    return (
      <div className="App">
        <DesertContainer/>
        {this.props.counter}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {increaseCounter})(App);
