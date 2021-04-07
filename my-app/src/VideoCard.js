import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./VideoCard.css"


function VideoCard({image , title , channel , views ,channelImage , timestamp}) {
    return (
        
            <div className='videoCard'>
            <img className ="videoCard_thumbnail" src={image} alt=""></img>
            
            <div className="videoCard_info">
                <Avatar className="videoCard_avatar" 
                alt={channel} 
                src={channelImage}>

                </Avatar>

            <div className="video_text"> 
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} {timestamp}
                </p>
                </div>
            </div>
            </div>
        
    )
}

export default VideoCard
