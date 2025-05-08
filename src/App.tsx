import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Product Catalog</h1>
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
