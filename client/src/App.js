import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import ListFrancesinhas from "./pages/ListFrancesinhas";
import AddFrancesinha from "./pages/AddFrancesinha";
import ShowFrancesinha from "./pages/ShowFrancesinha";
import ListRestaurants from "./pages/ListRestaurants";
import AddRestaurant from "./pages/AddRestaurant";
import ShowRestaurante from "./pages/ShowRestaurante";
import RestaurantSearchResults from "./pages/RestaurantSearchResults";
import FrancesinhaSearchResults from "./pages/FrancesinhaSearchResults";
import UpdateFrancesinha from "./pages/UpdateFrancesinha";
import UpdateRestaurant from "./pages/UpdateRestaurant";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <div className="navbarItem">
            <Link to="/" className="navbarLink">
              Home{" "}
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/listfrancesinhas" className="navbarLink">
              Francesinhas{" "}
            </Link>
          </div>
          <div className="navbarItem">
            <p className="logo">logo</p>
          </div>
          <div className="navbarItem">
            <Link to="/listrestaurants" className="navbarLink">
              Restaurants
            </Link>
          </div>
          <div className="navbarItem">
            <Link to="/addrestaurant" className="navbarLink">
              Add restaurant
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listfrancesinhas" element={<ListFrancesinhas />} />
          <Route
            path="/addfrancesinha/toRestaurant/:restaurantId"
            element={<AddFrancesinha />}
          />
          <Route path="/showfrancesinha/:id" element={<ShowFrancesinha />} />
          <Route
            path="/updatefrancesinha/:id"
            element={<UpdateFrancesinha />}
          />
          <Route path="/listrestaurants" element={<ListRestaurants />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
          <Route path="/showrestaurant/:id" element={<ShowRestaurante />} />
          <Route path="/updaterestaurant/:id" element={<UpdateRestaurant />} />
          <Route
            path="/restaurantsearchresults/:search"
            element={<RestaurantSearchResults />}
          />
          <Route
            path="/francesinhasearchresults/:search"
            element={<FrancesinhaSearchResults />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
