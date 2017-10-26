
// import React from 'react';

class App extends React.Component {
//constructor
  constructor(props) {
    super(props);
    this.state = {
      videolist: window.exampleVideoData,
      video: window.exampleVideoData[0],   
    };
  }
  
//render 

  render() {
    return (
     <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videolist}/>
      </div>
    </div>
  </div>
    );
  }
}


window.App = App;





 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined



















