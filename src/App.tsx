import "./App.css";
import { Header } from "./components/header";
import { Cart } from "./components/cart-steps";
import { Product } from "./components/product";

function App() {
  return (
    <div className="app">
      <Header />
      <Cart />
      <Product />
    </div>
  );
}

export default App;
