import { Link } from "react-router-dom";
import { Home, Compass, Heart, Clock, FilmIcon } from "lucide-react";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <Link
          to="/"
          className={`sidebar-item ${location.pathname === "/" ? "active" : ""}`}
          data-tooltip="Home"
        >
          <Home size={24} />
        </Link>

        <Link
          to="/discover"
          className={`sidebar-item ${location.pathname === "/favorites" ? "active" : ""}`}
          data-tooltip="Favorites" // ← Tooltip text
        >
          <Compass size={24} />
        </Link>

        <Link
          to="/favorites"
          className={`sidebar-item ${location.pathname === "/favorites" ? "active" : ""}`}
          data-tooltip="Favorites"
        >
          <Heart size={24} />
        </Link>

        <Link
          to="/watch-later"
          className={`sidebar-item ${location.pathname === "/watch-later" ? "active" : ""}`}
          data-tooltip="Watch Later"
        >
          <Clock size={24} />
        </Link>

        <Link
          to="/trending"
          className={`sidebar-item ${location.pathname === "/trending" ? "active" : ""}`}
          data-tooltip="Trending"
        >
          <FilmIcon size={24} />
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
