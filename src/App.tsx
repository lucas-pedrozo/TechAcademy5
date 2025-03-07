import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import Contact from "./pages/public/Contact";
import Home from "./pages/public/Home";
import SoundList from "./pages/public/SoundList";
import Login from "./pages/public/Login";
import Footer from "./components/custom/Footer";
import Register from "./pages/public/Register";
import LayoutHome from "./components/layout/LayoutHome";
import Layout from "./components/layout/Layout";

import backgrouHome from "./assets/ImageBg/BG1.png";
import backgroudUser from "./assets/ImageBg/BG3.png";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<LayoutHome backgroundImage={backgrouHome}><Outlet /></LayoutHome>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<Layout backgroundImage={backgroudUser}><Outlet /></Layout>}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/soundList" element={<SoundList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
