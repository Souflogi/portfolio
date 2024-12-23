import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./pages/home/Home";
import Works from "./pages/works/Works";
import PageNotFound from "./pages/pageNotFound/PAgeNotFound";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
