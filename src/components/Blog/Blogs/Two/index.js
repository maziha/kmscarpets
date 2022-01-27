import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BlogOne.css";
const Blog2 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="blogContainer">
        <div className="blogWrapper" data-aos="fade-up">
          <h1>JHELUM CARPET SUPPLIERS IN KERALA</h1>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="imageWrapper">
            <img
              src="https://i.postimg.cc/3RxmftP0/Jhelum1.jpg
"
              alt="Jhelum Carpet Suppliers in Kerala"
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <br />
          <br />
          <br />
          <div className="blogContent">
            <p>
              KMS Carpets is engrossed in the field of delivering Jhelum Carpets
              in order to meet the changing demands and requisites of our
              esteemed consumers. We have been able to give the greatest quality
              carpet to our loyal customers as a result of our extensive
              industry knowledge and experience. We obtain our Jhelum carpets
              from well-known carpet manufacturers and designers. These floor
              coverings are a one-of-a-kind combination of appealing concepts
              and original designs. The exquisite colour and delicate quality of
              our selections are sure to catch the eye.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
