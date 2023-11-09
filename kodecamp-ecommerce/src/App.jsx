import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./components/cart";

const App = () => {
  return (
    <div>
      {/* < NavBar />
      <Cart />
      <Home /> */}

      {/* < NavBar />
        <Home /> */}

      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
