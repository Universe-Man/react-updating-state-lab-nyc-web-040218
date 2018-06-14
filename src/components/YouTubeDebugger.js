import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  // this.setState({
  //   someProperty: Object.assign({}, this.state.someProperty, {flag: false})
  // });
//
//   this.setState({foo: 'bar'}, () => {
//     // Do something here.
// });


  changeBitrate = () => {
    this.setState({
      settings: {
        bitrate: 12,
        video: { resolution: '1080p' }
      }
    })
  }

  changeResolution = () => {
    this.setState({
      settings: {
        bitrate: 8,
        video: { resolution: '720p' }
      }
    })
  }

  render(){
    console.log(this.state.settings.bitrate);
    return(
      <div>
        <button className='bitrate' onClick={this.changeBitrate}>Change Bitrate</button>
        <button className='resolution' onClick={this.changeResolution}>Change Resolution</button>
      </div>
    )
  }
  //console.log(this.state.settings.bitrate);
}

export default YouTubeDebugger;
