import { Routes, Route } from "react-router-dom";
import Layout from "../src/pages/Layout";
import HomePage from "./pages/HomePage";
import Tours from "./pages/ToursPage";
import Hotels from "./pages/HotelsPage";
import Registration from "./pages/RegistrationPage";
import About from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="turlar" element={<Tours />} />
        <Route path="oteller" element={<Hotels />} />
        <Route path="qeydiyyat" element={<Registration />} />
        <Route path="haqqımızda" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
