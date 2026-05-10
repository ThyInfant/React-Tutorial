import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/NavBar/MoviesPage";
import TvShowsPage from "./components/NavBar/TvShowsPage";
import SeriesPage from "./components/NavBar/SeriesPage";
import AnimationsPage from "./components/NavBar/AnimationsPage";
import Sidebar from "./components/SideBar/Sidebar";
import Discover from "./components/SideBar/Discover";
import Favorites from "./components/SideBar/Favorites";
import WatchLater from "./components/SideBar/WatchLater";
import Trending from "./components/SideBar/Trending";
function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TvShowsPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/animations" element={<AnimationsPage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watch-later" element={<WatchLater />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
