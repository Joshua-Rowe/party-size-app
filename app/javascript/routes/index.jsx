import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { ShowPartySizeCount } from "../components/ShowPartySizeCount";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parties/:id/" element={<ShowPartySizeCount />} />
    </Routes>
  </Router>
);