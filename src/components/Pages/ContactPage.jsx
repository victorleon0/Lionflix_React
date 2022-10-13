import React from "react";
import Navbar from "../Navbar/Navbar";
import ContactForm from "./../Contact/ContactForm";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  return (
    <div className="movieDetails">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="details">
      <ContactForm/>
      </div>
      <div className="footer">
          <Footer/>
        </div>
    </div>
  );
};

export default ContactPage;