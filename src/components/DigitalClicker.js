import React from 'react';

class DigitalClicker extends React.Component {
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  increaseOne = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render(){
    // console.log("state is", this.state);
    return (
      <button onClick={this.increaseOne}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
