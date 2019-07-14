import React, { Component } from 'react';
import './App.css';

class Helloworld extends Component {

  customStyleLink ={
    backgroundColor:'gray'
  }
  render() {
    return (
      <a href ={this.props.link}  style={this.customStyleLink} >{this.props.linkText}</a>
    )
  }
}

export default Helloworld;