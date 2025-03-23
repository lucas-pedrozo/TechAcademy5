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
import NewPassword from "./pages/public/NewPassword";


// rotas de navegação dentro do site 
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<LayoutHome backgroundImage={background}><Outlet /></LayoutHome>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>

        <Route element={<LayoutLogin backgroundImage={BGLogin}><Outlet /></LayoutLogin>}>
          <Route path="/login" element={<LoginUser />} />
          <Route path="/newpassword" element={<NewPassword />} />
        </Route>

        {/* rota de erro 404 */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter >

  );
}

export default App;
