import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function RestaurantSearchResults() {
  let { search } = useParams();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let navigate = useNavigate();

  //HTTP request to get all restaurants that match the name
  useEffect(() => {
    axios
      .get(`http://localhost:3069/restaurants/name/${search}`)
      .then((res) => {
        setListOfRestaurants(res.data);
      });
  }, []);

  //Function to know what to do after searching
  const onSubmit = (event) => {
    navigate(`/restaurantsearchresults/${event.target.elements.search.value}`, {
      replace: true,
    });
  };

  return (
    <div className="listPage">
      <label className="listPageTitle">
        Here's a list of the restaurants that contain your search on our
        database!
      </label>
      <label className="listPageSubtitle">
        Want to add your restaurant? Here you add your very own restaurant and
        then add the francesinhas you serve!
      </label>
      <Link to="/addrestaurant" className="addRestaurantButton">
        Add restaurant
      </Link>
      <label>Looking for a specific restaurant?</label>
      <div className="searchPart">
        <form onSubmit={onSubmit}>
          <input type="text" id="search" name="search" className="searchBar" />
          <button type="submit" className="searchBarButton">
            {" "}
            Search
          </button>
        </form>
      </div>
      <div className="list">
        {listOfRestaurants.map((value, key) => {
          return (
            <div
              className="listPart"
              onClick={() => navigate(`/showrestaurant/${value.id}`)}
            >
              <div className="listPartImgContainer">ToBePhoto</div>
              <div className="listPartTextContainer">
                <label className="listPartName"> {value.name}</label>
                <label> {value.country}</label>
                <label className="restaurantListPartCity"> {value.city}</label>
                <label> {value.address}</label>
                <label> Rating: {value.rating}</label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RestaurantSearchResults;
