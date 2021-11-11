import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    const renderedVids = videos.map((video) => {
        return <VideoItem key = {video.etag} onVideoSelect = {onVideoSelect} video ={video} />
    });
    return <div className = "ui released divided list">{renderedVids}</div>

};

export default VideoList;