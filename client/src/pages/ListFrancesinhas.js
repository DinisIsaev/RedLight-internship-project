import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListFrancesinhas() {
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3069/francesinhas").then((res) => {
      setListOfFrancesinhas(res.data);
    });
  }, []);

  return (
    <div className="listPage">
      {listOfFrancesinhas.map((value, key) => {
        return (
          <div
            className="listPart"
            onClick={() => navigate(`/showfrancesinha/${value.id}`)}
          >
            <div className="name"> {value.name} </div>
            <div className="price"> {value.price} </div>
            <div className="rating"> {value.rating} </div>
            <div className="ingredients"> {value.ingredients} </div>
            <div className="restaurant"> {value.restaurant} </div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default ListFrancesinhas;
