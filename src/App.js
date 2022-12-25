import { Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
