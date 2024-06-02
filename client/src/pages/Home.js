import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../media/francesinhavid.mp4";
import bannerImage from "../media/bannerImage.png";
import restaurantImage from "../media/Restaurant1.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3069/restaurants").then((res) => {
      setListOfRestaurants(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3069/francesinhas").then((res) => {
      setListOfFrancesinhas(res.data);
    });
  }, []);

  return (
    <div className="homePage">
      <div className="banner">
        <label className="topBannerLabel">MADE BY FRANCESINHA LOVERS</label>
        <img src={bannerImage} className="bannerImage" />
        <label className="bottomBannerLabel">TO FRANCESINHA LOVERS.</label>
      </div>
      <div className="francesinhasHomePage">
        <div className="francesinhasHomePageLeft">
          {listOfFrancesinhas.slice(0, 3).map((value, key) => {
            return (
              <div
                className="exampleFrancesinha"
                onClick={() => navigate(`/showfrancesinha/${value.id}`)}
              >
                <div className="exampleFrancesinhaImageContainer">
                  <img src={bannerImage} className="exampleFrancesinhaImage" />
                </div>
                <div className="exampleFrancesinhaText">
                  <div className="exampleFrancesinhaName">{value.name}</div>
                  <div className="exampleFrancesinhaIngredients">
                    {value.ingredients}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="francesinhasHomePageRight">
          <p>Find more francesinhas</p>
          <Link to="/listfrancesinhas" className="homePageButton">
            Search
          </Link>
        </div>
      </div>
      <div className="restaurantsHomePage">
        <div className="restaurantsHomePageLeft">
          <p>or...</p>
          <p>Find more restaurants</p>
          <Link to="/listrestaurants" className="homePageButton">
            Search
          </Link>
        </div>
        <div className="restaurantsHomePageRight">
          {listOfRestaurants.slice(0, 2).map((value, key) => {
            return (
              <div
                className="exampleRestaurant"
                onClick={() => navigate(`/showrestaurant/${value.id}`)}
              >
                <img src={restaurantImage} className="exampleRestaurantImage" />
                <div className="exampleRestaurantText">{value.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
