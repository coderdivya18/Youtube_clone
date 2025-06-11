import React from "react";
import SidebarItem from "./SidebarItem.jsx";
import {
  Clapperboard,
  Clock,
  Download,
  Flame,
  History,
  Home,
  ListVideo,
  Music2,
  Rss,
  ShoppingBag,
  ThumbsUp,
  Video,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <aside className="w-60 shrink-0 hidden md:block bg-white p-4 ">
      {/*Top nav Links*/}
      <div className="space-y-2">
        <Link to="/">
          {" "}
          <SidebarItem icon={<Home size={20} />} label="Home" active />
        </Link>
        <SidebarItem icon={<Clapperboard size={20} />} label="Shorts" />
        <SidebarItem icon={<Rss size={20} />} label="Subscriptions" />
      </div>
      <hr className="text-gray-200 mt-2" />

      {/* You Section */}
      <div className="space-y-2">
        <p className="text-md font-bold text-black-500 my-4">You </p>
        <SidebarItem icon={<History size={20} />} label="History" />
        <SidebarItem icon={<ListVideo size={20} />} label="Playlists" />
        <SidebarItem icon={<Video size={20} />} label="Your videos" />
        <SidebarItem icon={<Clock size={20} />} label="Watch later" />
        <SidebarItem icon={<ThumbsUp size={20} />} label="Liked videos" />
        <SidebarItem icon={<Download size={20} />} label="Downloads" />
      </div>
      <hr className="text-gray-200 mt-2" />

      {/* Explore */}
      <div className="space-y-2">
        <p className="text-md font-bold text-black-500 my-4">Explore</p>
        <SidebarItem icon={<Flame size={20} />} label="Trending" />
        <SidebarItem icon={<ShoppingBag size={20} />} label="Shopping" />
        <SidebarItem icon={<Music2 size={20} />} label="Music" />
      </div>
    </aside>
  );
};

export default Sidebar;
