// import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.options = {
      key: YOUTUBE_API_KEY,
      //'AIzaSyCqoNpdRDG7Q5YvS45V7UqP15601f3gkUQ'
      query: '',
      max: 5
    },
    this.state = {
      videolist: exampleVideoData,
      video: exampleVideoData[0],   
    };
  }
  
  
  componentDidMount() {
    this.getVideos();
  }
  
  
  selectItem(video) {
    this.setState({
      video: video,
    });
  }
  
  getVideos() {
    var inputVal = document.getElementsByClassName('form-control');
    if (inputVal[0] === undefined || inputVal[0].value === '') {
      this.options.query = 'Super Mario Odyssey';
    } else {
      this.options.query = inputVal[0].value;
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



















