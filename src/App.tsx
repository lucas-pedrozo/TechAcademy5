import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import Contact from "./pages/public/Contact";
import Home from "./pages/public/Home";
import SoundList from "./pages/public/SoundList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/soundList" element={<SoundList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
