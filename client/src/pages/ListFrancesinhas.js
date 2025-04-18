import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListFrancesinhas() {
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);
  let navigate = useNavigate();

  //HTTP request to get all francesinhas
  useEffect(() => {
    axios.get("http://localhost:3069/francesinhas").then((res) => {
      setListOfFrancesinhas(res.data);
    });
  }, []);

  //Function to know what to do after searching
  const onSubmit = (event) => {
    navigate(
      `/francesinhasearchresults/${event.target.elements.search.value}`,
      {
        replace: true,
      }
    );
  };

  return (
    <div className="listPage">
      <label className="listPageTitle">
        Here's a list of all the francesinhas on our database!
      </label>
      <label className="listPageSubtitle">
        Want to add a francesinha? Go into the restaurants and select your
        restaurant to add one!
      </label>
      <label>Looking for a specific francesinha?</label>
      <div className="searchPart">
        <form onSubmit={onSubmit}>
          <input type="text" id="search" name="search" className="searchBar" />
          <button type="submit" className="searchBarButton">
            Search
          </button>
        </form>
      </div>
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

export default ListFrancesinhas;
