import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import Icon11 from "../../images/icon11.svg";

import {
  ContactsContainer,
  FormContentLeft,
  FormWrapper,
} from "./ContactsElements";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <ContactsContainer id="contact">
      <br />

      <h2 className="c-section__title" data-aos="fade-up">
        <span>CONTACT US</span>
      </h2>
      <FormWrapper data-aos="fade-up">
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
        <FormContentLeft>
          <img
            className="form-img"
            src={Icon11}
            alt="Best Carpets in Kothamangalam"
          />
        </FormContentLeft>
      </FormWrapper>
    </ContactsContainer>
  );
};

export default Form;
