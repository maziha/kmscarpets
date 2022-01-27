import React from "react";
import Footer from "../components/Blog/BlogFooter";
import FloatingWhatsapp from "../components/FloatingWhatsapp/FloatingWhatsapp";
import ProNavbar from "../components/OurProducts/ProNavbar";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../components/Services/globalStyles";
import BlogHero from "../components/Blog/BlogHero";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Blog2 from "../components/Blog/Blogs/Two";

const BlogTwo = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jhelum Carpet Suppliers in Kerala</title>
        </Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <FloatingWhatsapp />

      <ProNavbar />
      <BlogHero />
      <Blog2 />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default BlogTwo;
