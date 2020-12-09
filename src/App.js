import React,{ useState, useEffect} from "react";
import Video from "./Video";
import db from './firebase';

import "./App.css";

function App() {
  const [Videos, setVideos] = useState([]);

   useEffect(() => {
     db.collection('Videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
     
   }, [])


  return (
    <div className="app">

<div className="app_videos">
  {Videos.map(({ url, channel, description, song, likes, messages, shares }) => 
  <Video 
  url={url}
  channel={channel}
  description={description}
  song={song}
  likes={likes}
  messages={messages}
  shares={shares}  />
  )}


</div>



    </div>
  );
}

export default App;
