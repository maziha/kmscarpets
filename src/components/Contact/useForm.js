import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// function sendEmail(e) {
//   e.preventDefault();

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
    area: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "gmail",
        "template_4kd4jrm",
        e.target,
        "user_cZLRhARtSHe6CghuYMhf8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
