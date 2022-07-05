//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.js";
import Home from "./components/views/login/Home";
import Register from "./components/views/register/Register";
import Board from "./components/views/board/Board";
import NotFound from "./components/views/NotFound";
import NavMenu from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavMenu></NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Board" element={<Board />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
