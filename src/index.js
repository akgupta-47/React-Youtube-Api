import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list.js';
import VideoDetails from './components/video_detail';
import API_KEY from '../api_key.js';

// Create a new component and produce html from it
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('logan paul');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSeacrhTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take the generated html and put it on DOM screen
ReactDOM.render(<App />, document.querySelector('.container'));
