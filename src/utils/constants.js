const GOOGLE_API_KEY = "AIzaSyD5r_4_Aj_w2KueP1Zfi2COz8deVs5RW0c";

export const YOUTUBE_MOST_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_WATCH_VIDEO_BY_ID_API = (videoId) =>
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${GOOGLE_API_KEY}`;
