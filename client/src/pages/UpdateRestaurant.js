import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateRestaurant() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({});

  //Initial values for fields
  const initialValues = {
    name: restaurant.name,
    address: restaurant.address,
    city: restaurant.city,
    country: restaurant.country,
    rating: restaurant.rating,
  };

  //Function to know what to do after pressing submit button
  //Sends a HTTP request to update restaurant that matches the id
  const onSubmit = (data) => {
    axios
      .put(`http://localhost:3069/restaurants/${id}`, {
        name: data.name,
        address: data.address,
        city: data.city,
        country: data.country,
        rating: data.rating,
      })
      .then((res) => {
        navigate(`/showrestaurant/${id}`, {
          replace: true,
        });
      });
  };

  //Validation for form
  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    rating: yup.number().required().min(0).max(5),
  });

  return (
    <div className="addPage">
      <label className="listPageTitle">Edit a restaurant!</label>
      <label className="listPageSubtitle">
        Fill the form with the updated details of the restaurant!
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
          <label>Address: </label>
          <ErrorMessage name="address" component="span" />
          <Field id="inputAdd" name="address" placeholder="Address" />
          <label>City: </label>
          <ErrorMessage name="city" component="span" />
          <Field id="inputAdd" name="city" placeholder="City" />
          <label>Country: </label>
          <ErrorMessage name="country" component="span" />
          <Field id="inputAdd" name="country" placeholder="Country" />
          <label>Rating: </label>
          <ErrorMessage name="rating" component="span" />
          <Field id="inputAdd" name="rating" placeholder="Rating" />
          <button type="submit"> Update</button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateRestaurant;
