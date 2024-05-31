import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowRestaurante() {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3069/restaurants/id/${id}`).then((res) => {
      setRestaurant(res.data);
    });
  }, []);

  return <div>{restaurant.name}</div>;
}

export default ShowRestaurante;
