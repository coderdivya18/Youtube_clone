const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_WATCH_VIDEO_BY_ID_API = (videoId) =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_AUTO_COMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
