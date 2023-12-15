import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./components/cart";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
     

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
