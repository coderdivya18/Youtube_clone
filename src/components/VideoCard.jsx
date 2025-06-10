const VideoCard = ({ info }) => {
  if (!info) return null; // Prevent rendering on undefined

  const { snippet, statistics } = info;
  if (!snippet) return null; // Guard against undefined snippet

  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-80 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnails?.high?.url}
          alt="Video thumbnail"
          className="w-full rounded-xl"
        />
      </div>

      {/* Video Info */}
      <div className="pt-3 flex space-x-3">
        <img
          src={`https://ui-avatars.com/api/?name=${channelTitle}&background=random`}
          alt={channelTitle}
          className="w-10 h-10 rounded-full"
        />
        <div className="pr-2">
          <h3 className="font-medium text-sm leading-snug line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mt-1">{channelTitle}</p>
          <p className="text-xs text-gray-500 mt-0.5">
            {Number(statistics?.viewCount || 0).toLocaleString()} views • 5 days
            ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
