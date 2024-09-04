import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import QuoteCalculatorPage from "./pages/QuoteCalculatorPage";
import CareersPage from "./pages/CareersPage";
import TrackerPage from "./pages/TrackerPage";
import AllBlogsPage from "./pages/AllBlogsPage";
import BlogContentPage from "./pages/BlogContentPage.";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="get-quote" element={<QuoteCalculatorPage />} />
      <Route path="careers" element={<CareersPage />} />
      <Route path="track-now" element={<TrackerPage />} />
      <Route path="latest-news">
        <Route index element={<AllBlogsPage />} />
        <Route path=":id" element={<BlogContentPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
