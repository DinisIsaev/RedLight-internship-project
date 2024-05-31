import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListRestaurants() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3069/restaurants").then((res) => {
      setListOfRestaurants(res.data);
    });
  }, []);

  return (
    <div className="listPage">
      {listOfRestaurants.map((value, key) => {
        return (
          <div
            className="listPart"
            onClick={() => navigate(`/showrestaurant/${value.id}`)}
          >
            <div className="name"> {value.name} </div>
            <div className="address"> {value.address} </div>
            <div className="city"> {value.city} </div>
            <div className="country"> {value.country} </div>
            <div className="rating"> {value.rating} </div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default ListRestaurants;
