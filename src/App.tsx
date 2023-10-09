import "./assets/App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome";
import { PageMedia } from "./pages/PageMedia";
import { PageAbout } from "./pages/PageAbout";
import { PageRandom } from "./pages/PageRandom";
import { PageNotFound } from "./pages/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <NavLink to="/welcome">Welcome</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/random">Random</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path="/welcome" element={<PageWelcome />} />
          <Route path="/media" element={<PageMedia />} />
          <Route path="/random" element={<PageRandom />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
