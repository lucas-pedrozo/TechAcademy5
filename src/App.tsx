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
import ForgotMyPassoword from "./pages/public/ForgotMyPassoword";
import NewPassWord from "./pages/public/NewPassWord";

import backgrouHome from "./assets/ImageBg/BG1.png";
import backgroudUser from "./assets/ImageBg/BG3.png";
import backgroudUser2 from "./assets/ImageBg/BG4.png";
import imagemErro from "./assets/erro.jpg"

import About from "./pages/public/About";
import Error from "./pages/public/Erro404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<LayoutHome backgroundImage={backgrouHome}><Outlet /></LayoutHome>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<Layout backgroundImage={backgroudUser2}><Outlet /></Layout>}>
          <Route path="/soundList" element={<SoundList />} />
        </Route>
        <Route element={<Layout backgroundImage={backgroudUser}><Outlet /></Layout>}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotMyPassoword" element={<ForgotMyPassoword />} />
          <Route path="/newPassWord" element={<NewPassWord />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<LayoutHome backgroundImage={imagemErro}><Outlet /></LayoutHome>}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
