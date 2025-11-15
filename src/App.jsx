import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/pageNotFound/PageNotFound";

import AboutPage from "./pages/about/AboutPage";
import WorkPage from "./pages/works/WorkPage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
