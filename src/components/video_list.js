import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};
//when we are in a function based component we use props
//when we are in a class based component we use this.props
export default VideoList;
