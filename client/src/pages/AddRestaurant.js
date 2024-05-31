import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function AddRestaurant() {
  let navigate = useNavigate();

  const initialValues = {
    name: "",
    address: "",
    city: "",
    country: "",
    rating: "",
    francesinhas: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3069/restaurants", data).then((res) => {
      navigate("/listRestaurants", { replace: true });
    });
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
    address: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
    rating: yup.number().required(),
    francesinhas: yup.string().required(),
  });

  return (
    <div className="addPage">
      <label className="addTitle">ADD RESTAURANT</label>
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
          <button type="submit"> Add restaurant</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddRestaurant;
