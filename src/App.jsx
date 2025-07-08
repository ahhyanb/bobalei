import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu"; // Create this page
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Location from "./components/pages/Location";
import About from "./components/pages/About";
import Support from "./components/pages/Support";
import DrinkDetail from "./components/pages/DrinkDetail";

function App() {
  return (
     <Router>
      <Header />
      <div className="pt-24"> {/* Ensure content doesn't get hidden behind header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/drink/:drinkName" element={<DrinkDetail />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
