import "./assets/App.scss";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome";
import { PageMedia } from "./pages/PageMedia";
import { PageAbout } from "./pages/PageAbout";
import { PageRandom } from "./pages/PageRandom";
import { PageNotFound } from "./pages/PageNotFound";
import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";

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

        <footer>
          <h3>
            If you want to reach out to me, down below are my Github and 2
            random links
          </h3>
          <ul>
            <li>
              <a
                href="https://github.com/Gentechnik"
                title="My Github Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/mischiefanimals/status/1624898107283591168"
                target="_blank"
                rel="noopener noreferrer"
                title="a funny Cat video"
              >
                <FaRandom />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
                title="you know the rules"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
