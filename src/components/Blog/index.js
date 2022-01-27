import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BlogElements.css";

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="our-blog" id="blog">
        <div className="blogcontainer">
          <div className="text-center" data-aos="fade-up">
            <h2>OUR BLOG</h2>
          </div>
          <div className="row mt-5" data-aos="fade-up">
            <a href="/blog1" className="col">
              <div className="card">
                <img
                  src="https://i.postimg.cc/L6YnxJ8T/blog1.jpg"
                  alt="KMS Carpets"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Carpet Traders in Muvattupuzha</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    We have a variety of Area Rugs imported from the best
                    Manufacturers from Turkey, Pakistan and Middle-East. We
                    specializes in Doormats, Turkish Carpets, Jhelum Rugs,
                    Runner Carpets etc....
                  </p>
                </div>
              </div>
            </a>

            <a href="/blog2" className="col">
              <div className="card">
                <img
                  src="https://i.postimg.cc/25K41Pcj/Jhelum1.jpg

"
                  alt="Jhelum Carpets in Kerala"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Jhelum Carpet Suppliers in Kerala</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    KMS Carpets is engrossed in the field of delivering Jhelum
                    Carpets in order to meet the changing demands and requisites
                    of our esteemed consumers. We have been able to give the
                    greatest quality carpet....
                  </p>
                </div>
              </div>
            </a>
            <a href="/blog3" className="col">
              <div className="card">
                <img
                  src="https://i.postimg.cc/mgWCMYyM/blog3.jpg
"
                  alt="Turkish Capets in Muvattupuzha"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Best Turkish Carpets in Ernakulam</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    Turkey is the world's leading exporter of carpets, with
                    one-third of the country's population employed in the
                    business. Their handcrafts, designs, threads, and colour
                    combinations are all fantastic. Turkish carpets...
                  </p>
                </div>
              </div>
            </a>
            {/* <a href="/blog" className="col">
              <div className="card">
                <img src={AreaRug} alt="" />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Best Area Rug Suppliers in Kerala</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    We have a variety of Area Rugs imported from Turkey,
                    Pakistan etc. Our shop is Located in the Heart of
                    Muvattupuzha. 1 hour away from Nedumbassery Airport.
                  </p>
                </div>
              </div>
            </a> */}
            {/* <a href="/blog" className="col">
              <div className="card">
                <img src={HandKnitted} alt="" />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Hand-Knitted Imported Carpets in Ernakulam</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam vero eaque animi pariatur fugit excepturi, fuga
                    delectus facere provident beatae.
                  </p>
                </div>
              </div>
            </a> */}
            {/* <a href="/blog" className="col">
              <div className="card">
                <img src={blogImage2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">
                    <p>Best Prayer Rug Suppliers in Kerala</p>
                  </h5>
                  <p className="date-author">
                    20 January 2022{" "}
                    <span className="author">By KMS Carpets</span>
                  </p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam vero eaque animi pariatur fugit excepturi, fuga
                    delectus facere provident beatae.
                  </p>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
