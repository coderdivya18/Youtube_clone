import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/slice/appSlice.js";
import { YOUTUBE_WATCH_VIDEO_BY_ID_API } from "../utils/constants.js";
import CommentsContainer from "./CommentsContainer.jsx";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    fetchVideoById(videoId);
  }, [videoId]);

  const fetchVideoById = async (id) => {
    try {
      const response = await fetch(YOUTUBE_WATCH_VIDEO_BY_ID_API(id));
      const json = await response.json();
      console.log(json);
      setVideoData(json?.items?.[0]);
    } catch (e) {
      console.error("Error fetching video by ID:", e);
    }
  };

  return (
    <div className=" px-5 py-6">
      <div className="mb-5">
        {videoId && (
          <div className="mb-4">
            <iframe
              className="w-full aspect-video rounded-xl shadow-md"
              width="1200"
              height="600"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        )}

        {videoData && (
          <div>
            <h1 className="text-xl font-semibold mb-2">
              {videoData.snippet.title}
            </h1>
            <p className="text-gray-700 text-sm font-medium">
              {videoData.snippet.channelTitle}
            </p>
            <p className="text-xs text-gray-500">
              {parseInt(videoData.statistics.viewCount).toLocaleString()} views
            </p>
          </div>
        )}
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
