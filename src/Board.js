import React, { Component } from 'react';
import Box from './Box'

class Board extends Component {
  render() {
    console.log(this.props.name);
    return (

      <table className = 'board' >
      <h1> {this.props.name} </h1>
        <tr>
          <td><Box /></td>
          <td><Box /></td>
          <td><Box /></td>
        </tr>
        <tr>
          <td><Box /></td>
          <td><Box /></td>
          <td><Box /></td>
        </tr>
        <tr>
          <td><Box /></td>
          <td><Box /></td>
          <td><Box /></td>
        </tr>
      </table>


    );
  }
}

export default Board;
