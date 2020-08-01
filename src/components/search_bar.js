import React, { Component } from 'react';

// every class should have a render function and return some jsx or will get error
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(eventObject) =>
            this.onInputChange(eventObject.target.value)
          }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSeacrhTermChange(term);
  }
}

//whenever a change in input occurs this function is called
/*onInputChange(eventObject) {
    this.setState({ term: eventObject.target.value });
  }
  if u are using this then use 
  defaultValue instead of value*/

export default SearchBar;
//        Value of input: {this.state.term}
