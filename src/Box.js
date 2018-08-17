import React, { Component } from 'react';

class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
        box: 'x'


      }
  }

   handleClick(){

    let box = this.state.box
    if (box ==='o') {
       box ='x'
    }
    else if (box ==='x'){
      box = 'o'
       box
    }
    console.log(box);

    this.setState({box: box})
  }



  render() {
    console.log(this.state.box);
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>{this.state.box}</button>

      </div>

    );
  }
}

export default Box;
