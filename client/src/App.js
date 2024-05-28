import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfFrancesinhas, setListOfFrancesinhas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3069/francesinhas").then((res) => {
      setListOfFrancesinhas(res.data);
    });
  }, []);
  return (
    <div className="App">
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

export default App;
