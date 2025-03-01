import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/custom/Header";
import Contact from "./pages/public/Contact";
import Home from "./pages/public/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
