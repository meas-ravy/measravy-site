import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/main_layout";
import Home from "./pages/home";
import About from "./pages/about";
// import Gear from "./pages/gear";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/gear" element={<Gear />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const basename = baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
