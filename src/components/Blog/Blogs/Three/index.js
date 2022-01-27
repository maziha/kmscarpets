import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BlogOne.css";
const Blog3 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="blogContainer">
        <div className="blogWrapper" data-aos="fade-up">
          <h1>BEST TURKISH CARPETS IN ERNAKULAM</h1>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="imageWrapper">
            <img
              src="https://i.postimg.cc/mgWCMYyM/blog3.jpg
"
              alt="Best Turkish Carpets in Ernakulam"
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
              Turkey is the world's leading exporter of carpets, with one-third
              of the country's population employed in the business. Their
              handcrafts, designs, threads, and colour combinations are all
              fantastic. Turkish carpets come in a range of styles. KMS Carpets
              provide high-quality items at reasonable pricing. We have a
              variety of Turkish mats in a variety of patterns and designs. With
              a bold new look, we break through.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
