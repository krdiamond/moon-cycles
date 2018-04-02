import React, { Component } from 'react';
import {connect} from 'react-redux'

import desertIMG from '../images/desert.jpg'
import moon13 from '../images/moon13.png'

class Desert extends Component {
  render() {
  //console.log(this.props.counter)
    return (
      <div id="desert">
          <img src={desertIMG} alt="desert" />
          {this.props.counter % 2 === 0 ?  <img src={moon13} alt="full moon" /> :null}
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Desert);
