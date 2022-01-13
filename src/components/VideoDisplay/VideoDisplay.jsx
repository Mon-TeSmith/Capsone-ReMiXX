import React from 'react';

const VideoDisplay = (props) => {
    let urlLink = `https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`
    return(
    <iframe id="ytplayer" type="text/html" width="640" height="360"
    src= {urlLink}
    frameborder="0">
        
    </iframe>
    )
}

export default VideoDisplay;