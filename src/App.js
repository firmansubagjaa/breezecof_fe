import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
// utils
import { HelmetProvider } from "react-helmet-async";
import ProductDetail from "./pages/productDetail";
import EditProfile from "./pages/EditProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import AddProduct from "./pages/admin/addproduct";
import Cart from "./pages/cart";
// import Belajar from "./components/"

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
        </Routes>
      </HelmetProvider>

      {/* <Home /> */}
    </>
    // <Belajar />
  );
}

export default App;
