import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
// import Belajar from "./components/"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </>
    // <Belajar />
  );
}

export default App;
