import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Badges from "./pages/Badges.jsx";
import Volunteer from "./pages/VolunteerForm.jsx";
import WorkCategories from "./pages/WorkCategories.jsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<WorkCategories />} />
        <Route path="badges" element={<Badges />} />
        <Route path="volunteer" element={<Volunteer />} />
       
      </Route>
    </Routes>
  </BrowserRouter>
);
