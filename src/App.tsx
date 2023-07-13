import "./assets/App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome";
import { PageMedia } from "./pages/PageMedia";
import { PageAbout } from "./pages/PageAbout";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <NavLink to="/welcome">Welcome</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <Routes>
          <Route path="/welcome" element={<PageWelcome />} />
          <Route path="/media" element={<PageMedia />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <footer>
          <h3>
            If you want to reach out to me, down below are my Github and 2
            random links
          </h3>
          <ul>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
