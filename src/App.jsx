import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoPlayer from "./pages/Home";
import Page from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideoPlayer />} />
        <Route path="/page1" element={<Page />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="page5" element={<Page5 />} />
      </Routes>
    </>
  );
}

export default App;
