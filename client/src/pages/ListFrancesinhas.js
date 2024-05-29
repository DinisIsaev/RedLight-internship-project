import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function ListFrancesinhas() {
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3069/francesinhas").then((res) => {
      setListOfFrancesinhas(res.data);
    });
  }, []);
  return (
    <div>
      {listOfFrancesinhas.map((value, key) => {
        return (
          <div>
            <div> {value.name} </div>
            <div> {value.price} </div>
            <div> {value.rating} </div>
            <div> {value.ingredients} </div>
            <div> {value.restaurant} </div>
            <p></p>
          </div>
        );
      })}
    </div>
  );
}

export default ListFrancesinhas;
