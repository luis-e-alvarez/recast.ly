class Search extends React.Component{
  constructor(props){
    super(props);
  }
  onInputChange(event){
    var value = event.target.value;
    this.props.onChange(value);
  }
  render() {
    return(
     <div className="search-bar form-inline">
       <input className="form-control" type="text" value='Submit' onChange={function() { props.onChange(event.target.value); }}/>
       <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
