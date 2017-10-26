
// import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      key: 'AIzaSyCqoNpdRDG7Q5YvS45V7UqP15601f3gkUQ',
      query: null,
      max: 5
    },
    this.state = {
      videolist: window.exampleVideoData,
      video: window.exampleVideoData[0],   
    };
  }
  
  componentDidMount() {
    this.getVideos('Dogs');
  }
  
  selectItem(video) {
    this.setState({
      video: video,
    });
  }
  
  changeItems(videos) {
    console.log(videos);
    this.setState({
      videolist: videos,
    });
  }
  
  getVideos() {
    var inputVal = document.getElementsByClassName('form-control');
    if (inputVal[0] !== undefined) {
      this.options.query = inputVal[0].value;
    } else {
      this.options.query = 'Dogs';
    }
    this.props.searchYouTube(this.options, (videos) => {
      this.setState({
        videolist: videos,
        video: videos[0],
      });
    });
  }
  
  render() {
    return (
     <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search onChange={this.getVideos.bind(this)}/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videolist} onClick={this.selectItem.bind(this)} />
      </div>
    </div>
  </div>
    );
  
  }
}


window.App = App;





 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined



















