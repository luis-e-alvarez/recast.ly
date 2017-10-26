// class Search extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   onInputChange(event){
//     var value = event.target.value;
//     this.props.onChange(value);
//   }
//   render() {
//     return(
//      <div className="search-bar form-inline">
//        <input className="form-control" type="text"  onChange={this.onInputChange.bind(this)}/>
//        <button className="btn hidden-sm-down">
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div>);
//   }
// }

var Search = (props) => (
  <div>
  <form className="search-bar form-inline">
    <input className="form-control" type="text" onChange={_.debounce(props.onChange, 500)}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form> 
  
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


// class Search extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   onInputChange(event){
//     var value = event.target.value;
//     this.props.onChange(value);
//   }
//   render() {
//     return(
//      <div className="search-bar form-inline">
//        <input className="form-control" type="text"  onChange={this.onInputChange}/>
//        <button className="btn hidden-sm-down">
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div>);
//   }
// }