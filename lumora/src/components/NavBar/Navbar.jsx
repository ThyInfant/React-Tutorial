import { Link } from "react-router-dom";
import { Search, Bell, User } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        {/* Left - Logo */}
        <Link to="/" className="logo">
          Lumora
        </Link>

        {/* Middle -Nav Links */}
        <div className="nav-links">
          <Link to="/movies">Movies</Link>
          <Link to="/tvshows">TV Shows</Link>
          <Link to="/series">Series</Link>
          <Link to="/animations">Animations</Link>
        </div>

        {/* Rightt - Icons */}
        <div className="nav-icons">
          <button>
            <Search size={20} />
          </button>
          <button>
            <Bell size={20} />
          </button>
          <button>
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
