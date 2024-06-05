import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";

function AddFrancesinha() {
  let { restaurantId } = useParams();
  let navigate = useNavigate();

  //Initial values for fields
  const initialValues = {
    name: "",
    price: "",
    rating: "",
    ingredients: "",
    restaurant: "",
  };

  //Function to know what to do after pressing submit button
  //Sends a HTTP request to add francesinha
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3069/francesinhas", {
        name: data.name,
        price: data.price,
        rating: data.rating,
        ingredients: data.ingredients,
        RestaurantId: restaurantId,
      })
      .then((res) => {
        navigate(`/showrestaurant/${restaurantId}`, { replace: true });
      });
  };

  //Validation for form
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    price: yup.number().required().min(0),
    rating: yup.number().required().min(0).max(5),
    ingredients: yup.string().required(),
  });

  return (
    <div className="addPage">
      <label className="listPageTitle">Add a francesinha!</label>
      <label className="listPageSubtitle">
        Fill the form with the details of the francesinha!
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
          <button type="submit"> Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddFrancesinha;
