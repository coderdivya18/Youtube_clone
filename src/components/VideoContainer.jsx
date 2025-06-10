import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "../utils/constants.js";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchPopularVideos();
  }, []);

  const fetchPopularVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
      const json = await data.json();
      setVideos(json?.items);
      console.log(json?.items);
    } catch (e) {
      console.log(e);
    }
  };

  //console.log(videos);
  return (
    <div className="p-4 flex flex-wrap gap-4">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default VideoContainer;
