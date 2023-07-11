import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landingspage from "./pages/Landingspage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route index element={<Landingspage />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
