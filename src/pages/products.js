import React from "react";
import Footer from "../components/OurProducts/ProFooter";
import FloatingWhatsapp from "../components/FloatingWhatsapp/FloatingWhatsapp";
import ProNavbar from "../components/OurProducts/ProNavbar";
import Products from "../components/OurProducts";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../components/Services/globalStyles";
import ProHero from "../components/OurProducts/ProHero";
import { Helmet, HelmetProvider } from "react-helmet-async";

const OurProducts = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Products</title>
        </Helmet>
      </HelmetProvider>
      <GlobalStyle />
      <FloatingWhatsapp />

      <ProNavbar />
      <ProHero />
      <ScrollToTop />
      <Products />
      <Footer />
    </div>
  );
};

export default OurProducts;
