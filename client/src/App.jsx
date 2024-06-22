import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Auth } from "./pages/auth";
import { Home } from "./pages/home";
import Create_recipe from "./pages/create_recipe";
import Saved_recipes from "./pages/saved_recipes";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-recipe" element={<Create_recipe />} />
          <Route path="/saved-recipes" element={<Saved_recipes />} />
        </Routes>
      </Router>
    </div>
  );
}
