import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShowFrancesinha() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [francesinha, setFrancesinha] = useState({});
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3069/francesinhas/id/${id}`).then((res) => {
      setFrancesinha(res.data);
      axios
        .get(`http://localhost:3069/restaurants/id/${res.data.RestaurantId}`)
        .then((res2) => {
          setRestaurant(res2.data);
        });
    });
  }, []);

  const deleteFrancesinha = (id) => {
    axios.delete(`http://localhost:3069/francesinhas/${id}`).then(() => {
      navigate("/listFrancesinhas", { replace: true });
    });
  };

  return (
    <div className="showPage">
      <div className="showPageTop">
        <div className="listPart">
          <div className="listPartImgContainer">ToBePhoto</div>
          <div className="listPartTextContainer">
            <label className="listPartName"> {francesinha.name}</label>
            <label className="francesinhaPrice">
              Price: {francesinha.price}
            </label>
            <label className="francesinhaRating">
              Rating: {francesinha.rating}
            </label>
            <label className="francesinhaIngredients">
              {francesinha.ingredients}
            </label>
          </div>
        </div>
      </div>
      <div className="settingButtons">
        <p className="settingButton" onClick={() => deleteFrancesinha(id)}>
          Delete
        </p>
        <p className="settingButton">Update</p>
      </div>
      <div
        className="listPart"
        onClick={() => navigate(`/showrestaurant/${restaurant.id}`)}
      >
        <div className="listPartImgContainer">ToBePhoto</div>
        <div className="listPartTextContainer">
          <label className="listPartName"> {restaurant.name}</label>
          <label className="restaurantAddress"> {restaurant.address}</label>
          <label className="restaurantCity"> {restaurant.city}</label>
          <label className="restaurantCountry"> {restaurant.country}</label>
          <label className="restaurantRating">
            Rating: {restaurant.rating}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ShowFrancesinha;
