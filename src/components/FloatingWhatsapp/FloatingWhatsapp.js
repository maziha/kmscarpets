import React from "react";
import "./WhatsappElements.css";
const FloatingWhatsapp = () => {
  return (
    <div>
      <div className="containerrr">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <a
          href="https://api.whatsapp.com/send?phone=917558077632"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-whatsapp wp-button"></i>
        </a>
      </div>
    </div>
  );
};

export default FloatingWhatsapp;
