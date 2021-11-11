import React from "react";

const VideoDetail = ({ video }) => {  // ===this.props.video
    if (!video) {
        return <div>Loading...</div>
    }

    const vidSrc = `https://youtube.com/embed/${video.id.videoId}`;
    const vidTitle = video.snippet.title;
    console.log(vidSrc);
    return (
        <div>
            <div className="ui embed">
                <iframe src={vidSrc} title={vidTitle} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;