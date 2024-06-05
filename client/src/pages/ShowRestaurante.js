import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ShowRestaurante() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3069/restaurants/id/${id}`).then((res) => {
      setRestaurant(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3069/francesinhas/ofRestaurant/${id}`)
      .then((res) => {
        setListOfFrancesinhas(res.data);
      });
  }, []);

  const deleteRestaurant = (id) => {
    axios.delete(`http://localhost:3069/restaurants/${id}`).then(() => {
      navigate("/listrestaurants", { replace: true });
    });
  };

  const updateRestaurant = (id) => {
    navigate(`/updaterestaurant/${id}`);
  };

  return (
    <div className="showPage">
      <div className="showPageTop">
        <div className="listPart">
          <div className="listPartImgContainer">ToBePhoto</div>
          <div className="listPartTextContainer">
            <label className="listPartName"> {restaurant.name}</label>
            <label> {restaurant.city} </label>
            <label> {restaurant.address} </label>
            <label> {restaurant.country} </label>
            <label> Rating: {restaurant.rating} </label>
          </div>
        </div>
      </div>
      <div className="settingButtons">
        <p
          onClick={() => navigate(`/addfrancesinha/toRestaurant/${id}`)}
          className="settingButton"
        >
          Add francesinha
        </p>
        <p onClick={() => deleteRestaurant(id)} className="settingButton">
          Delete
        </p>
        <p onClick={() => updateRestaurant(id)} className="settingButton">
          Update
        </p>
      </div>
      <label className="listPageSubtitle">
        Here's a list of the francesinhas available from the restaurant:
      </label>
      <div className="list">
        {listOfFrancesinhas.map((value, key) => {
          return (
            <div
              className="listPart"
              onClick={() => navigate(`/showFrancesinha/${value.id}`)}
            >
              <div className="listPartImgContainer">ToBePhoto</div>
              <div className="listPartTextContainer">
                <label className="listPartName"> {value.name}</label>
                <label className="francesinhaPrice">Price: {value.price}</label>
                <label className="francesinhaRating">
                  Rating: {value.rating}
                </label>
                <label className="francesinhaIngredients">
                  {value.ingredients}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowRestaurante;
