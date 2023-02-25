import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
// utils
import { HelmetProvider } from "react-helmet-async";
// import Belajar from "./components/"

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </HelmetProvider>

      {/* <Home /> */}
    </>
    // <Belajar />
  );
}

export default App;
