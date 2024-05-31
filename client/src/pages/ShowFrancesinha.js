import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowFrancesinha() {
  let { id } = useParams();
  const [francesinha, setFrancesinha] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3069/francesinhas/id/${id}`).then((res) => {
      setFrancesinha(res.data);
    });
  }, []);

  return <div>{francesinha.name}</div>;
}

export default ShowFrancesinha;
