import React from "react";
import "./Form.css";
import Icon12 from "../../images/icon12.svg";

const FormSuccess = () => {
  return (
    <div className="form-content-right">
      <h1 className="form-success">We have received your request!</h1>
      <img
        className="form-img-2"
        src={Icon12}
        alt="Best Carpets in Ernakulam"
      />
    </div>
  );
};

export default FormSuccess;
