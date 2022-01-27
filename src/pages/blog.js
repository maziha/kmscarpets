import React from "react";
import Footer from "../components/Blog/BlogFooter";
import FloatingWhatsapp from "../components/FloatingWhatsapp/FloatingWhatsapp";
import ProNavbar from "../components/OurProducts/ProNavbar";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../components/Services/globalStyles";
import BlogHero from "../components/Blog/BlogHero";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Blog from "../components/Blog";

const OurBlog = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Blog</title>
        </Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <FloatingWhatsapp />
      <ProNavbar />
      <BlogHero />
      <Blog />

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default OurBlog;
