import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateFrancesinha() {
  let { id } = useParams();
  const [francesinha, setFrancesinha] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3069/francesinhas/id/${id}`).then((res) => {
      setFrancesinha(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    axios
      .put(`http://localhost:3069/francesinhas/${id}`, {
        name: data.name,
        price: data.price,
        rating: data.rating,
        ingredients: data.ingredients,
        RestaurantId: francesinha.restaurantId,
      })
      .then((res) => {
        navigate(`/showfrancesinha/${id}`, {
          replace: true,
        });
      });
  };

  const initialValues = {
    name: francesinha.name,
    price: francesinha.price,
    rating: francesinha.rating,
    ingredients: francesinha.ingredients,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().min(0),
    rating: yup.number().required().min(0).max(5),
    ingredients: yup.string().required(),
  });

  return (
    <div className="addPage">
      <label className="listPageTitle">Edit selected francesinha.</label>
      <label className="listPageSubtitle">
        Fill the form with the updated details of the francesinha!
      </label>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Name: </label>
          <ErrorMessage name="name" component="span" />
          <Field id="inputAdd" name="name" placeholder="Name" />
          <label>Price: </label>
          <ErrorMessage name="price" component="span" />
          <Field id="inputAdd" name="price" placeholder="Price" />
          <label>Rating: </label>
          <ErrorMessage name="rating" component="span" />
          <Field id="inputAdd" name="rating" placeholder="Rating" />
          <label>Ingredients: </label>
          <ErrorMessage name="ingredients" component="span" />
          <Field id="inputAdd" name="ingredients" placeholder="Ingredients" />
          <button type="submit"> Update </button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateFrancesinha;
