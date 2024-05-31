import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function AddFrancesinha() {
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    price: "",
    rating: "",
    ingredients: "",
    restaurant: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3069/francesinhas", data).then((res) => {
      navigate("/listfrancesinhas", { replace: true });
    });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required(),
    rating: yup.number().required(),
    ingredients: yup.string().required(),
    restaurant: yup.string().required(),
  });

  return (
    <div className="addPage">
      <label className="addTitle">ADD FRANCESINHA</label>
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
          <label>Restaurant: </label>
          <ErrorMessage name="restaurant" component="span" />
          <Field id="inputAdd" name="restaurant" placeholder="Restaurant" />
          <button type="submit"> Add francesinha</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddFrancesinha;
