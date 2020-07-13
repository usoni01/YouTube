import React from "react";
import VideoListItems from "./video_list_items";

const VideoList = (props)=>{
    const videoItem = props.videos.map((video) =>{
        return <VideoListItems onVideoSelect={props.onSelectedVideo} key={video.etag} video={video} />
    })
    return(
        <ul className="col-md-4 list-group">
            {videoItem}
        </ul>
    )
}
export default VideoList;