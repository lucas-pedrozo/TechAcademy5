import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// imports end pages
import Home from "./pages/public/Home";

// imports end layout
import LayoutHome from "./components/layout/LayoutHome";
import Header from "./components/custom/Header";

// imports end images
import backgrouHome from "./assets/image/BG1.png"
import LoginUser from "./pages/public/LoginUser";


// rotas de navegação dentro do site 
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route element={<LayoutHome backgroundImage={backgrouHome}><Outlet /></LayoutHome>}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginUser />} />
        </Route>

        {/* rota de erro 404 */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
