import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ListFrancesinhas from "./pages/ListFrancesinhas";
import AddFrancesinha from "./pages/AddFrancesinha";
import ShowFrancesinha from "./pages/ShowFrancesinha";
import ListRestaurants from "./pages/ListRestaurants";
import AddRestaurant from "./pages/AddRestaurant";
import ShowRestaurante from "./pages/ShowRestaurante";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/listfrancesinhas">francesinhas </Link>
          <Link to="/addfrancesinha">add francesinha </Link>
          <Link to="/">Home </Link>
          <Link to="/listrestaurants">restaurants </Link>
          <Link to="/addrestaurant">add restaurant</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listfrancesinhas" element={<ListFrancesinhas />} />
          <Route path="/addfrancesinha" element={<AddFrancesinha />} />
          <Route path="/showfrancesinha/:id" element={<ShowFrancesinha />} />
          <Route path="/listrestaurants" element={<ListRestaurants />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/showrestaurant/:id" element={<ShowRestaurante />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
