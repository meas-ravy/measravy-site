import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/main_layout";
import Home from "./pages/home";
import About from "./pages/about";
// import Gear from "./pages/gear";
import Contact from "./pages/contage";

export default function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const basename = baseUrl === "/" ? "/" : baseUrl.replace(/\/$/, "");

  return (
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gear" element={<Gear />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
