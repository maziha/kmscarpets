import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BlogOne.css";
const Blog1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="blogContainer">
        <div className="blogWrapper" data-aos="fade-up">
          <h1>CARPET TRADERS IN MUVATTUPUZHA</h1>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div className="imageWrapper">
            <img
              src="https://i.postimg.cc/L6YnxJ8T/blog1.jpg
"
              alt="carpet traders in muvattupuzha"
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
              KMS Carpets carries a complete line of products from the world's
              leading manufacturers. We specializes in Doormats, Turkish
              Carpets, Jhelum Rugs, Runner Carpets etc. Our store is located at
              Nehru Park, in the Heart of Muvattupuzha. KMS Carpets specialises
              in all types of rugs and carpets, and has a well-known collection.
              Ours is a gallery dedicated to the finest woven works of art. It
              houses a variety of handwoven and handknotted masterpieces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
