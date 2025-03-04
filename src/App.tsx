import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import Contact from "./pages/public/Contact";
import Home from "./pages/public/Home";
import SoundList from "./pages/public/SoundList";
import Login from "./pages/public/Login";
import Footer from "./components/custom/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/soundList" element={<SoundList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
