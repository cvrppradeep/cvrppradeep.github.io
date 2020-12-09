import React, { useState } from 'react';
import "./videoSidebar.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSidebar({likes, shares, messages}) {
const [liked, setliked] =  useState(false);


    return (
<div className="videoSidebar">

<div className="videoSidebar_button">
    { liked ? 
    
    (
    <FavoriteIcon forntsize="large" onClick={(e) => setliked(false)} />
):
(
<FavoriteBorderIcon onClick={(e) => setliked(true)} />

)
}
<p>{liked ? likes + 1 :likes}</p>
</div>



<div className="videoSidebar_button">
<MessageIcon />
<p>{messages}</p>

</div>

<div className="videoSidebar_button">
<ShareIcon />
<p>{shares}</p>
</div>

           
        </div>
    )
}

export default VideoSidebar
