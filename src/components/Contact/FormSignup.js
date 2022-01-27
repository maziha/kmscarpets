import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import { FormContentRight } from "./ContactsElements";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <FormContentRight>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          {/* <label className="form-label">Name</label> */}
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-inputs">
          {/* <label className="form-label">Email</label> */}
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          {/* <label className="form-label">Contact Number</label> */}
          <input
            className="form-input"
            type="contact"
            name="contact"
            placeholder="Enter your Contact Number"
            value={values.contact}
            onChange={handleChange}
          />
          {errors.contact && <p>{errors.contact}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </FormContentRight>
  );
};

export default FormSignup;
