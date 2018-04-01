import React, { Component } from 'react';
import { connect } from 'react-redux'
import desertIMG from '../images/desert.jpg'

class Desert extends Component {
  render() {
    return (
      <div id="desert">
          <img src={desertIMG} alt="desert" />
      </div>
    );
  }
}

export default Desert;
