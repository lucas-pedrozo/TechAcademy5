import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


// imports end images
import background from "./assets/image/Home.png";
import BGLogin from "./assets/image/BGfinal.webp";

// imports end pages
import Home from "./pages/public/Home";
import Header from "./components/custom/Header";

// imports end layout
import LayoutHome from "./components/layout/LayoutHome";
import LayoutLogin from "./components/layout/LayoutLogin";
import LoginUser from "./pages/public/LoginUser";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import Sound from "./pages/public/Sound";
import Footer from "./components/custom/Footer";
import Admin from "./pages/auth/Admin";
import AdmUser from "./pages/auth/AdmUser";
import BuscarSound from "./pages/auth/BuscarSound";


// rotas de navegação dentro do site 
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route element={<LayoutHome backgroundImage={background}><Outlet /></LayoutHome>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<LayoutHome backgroundImage={background}><Outlet /></LayoutHome>}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminuser" element={<AdmUser />} />
          <Route path="/buscarSound" element={<BuscarSound />} />
        </Route>



        <Route element={<LayoutLogin backgroundImage={BGLogin}><Outlet /></LayoutLogin>}>
          <Route path="/login" element={<LoginUser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sound" element={<Sound />} />
        </Route>

        {/* rota de erro 404 */}]
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter >

  );
}

export default App;
