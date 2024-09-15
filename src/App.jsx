import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
// import AllProduct from "./pages/AllProduct";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import AdminLogin from "./pages/AdminLogin";
import Product from "./pages/Product";
import { createContext, useState } from "react";
import UserCart from "./pages/UserCart";
import UserPage from "./pages/UserPage";
import Payment from "./pages/Payment";

export const UserDataContext = createContext();

function App() {
  const [getUserDataId, setGetUserDataId] = useState(null);

  console.log(getUserDataId, "batao is kya h");

  return (
    <UserDataContext.Provider value={{ getUserDataId, setGetUserDataId }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<AllProduct />} /> */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<UserCart />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserDataContext.Provider>
  );
}

export default App;
