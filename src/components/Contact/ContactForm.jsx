import React, { useState } from "react";
import ContactCard from "../Contact/ContactCard";
import "./ContactForm.scss";

const ContactForm = ({ onChangePage, previous }) => {
  const [contactForm, setContactForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ;
  };

  return (
    <div id="container">
      <div id="container__forms">
        <form id="container__form" method="post" type="submit" action="mailto:victor.leon.huerta@gmail.com">
          <div id="container__first">
            <label htmlFor="firstname">
              <strong>Nombre</strong>
            </label>
            <input type="text" id="firstname" name="firstname" placeholder="Nombre" onChange={handleChange}></input>
          </div>
          <div id="container__last">
            <label htmlFor="lastname">
              <strong>Apellidos</strong>
            </label>
            <input type="text" id="lastname" name="lastname" placeholder="Apellidos" onChange={handleChange}></input>
          </div>
          <div id="container__email">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}></input>
          </div>
          <div id="container__message">
            <label htmlFor="message">
              <strong>Déjame un mensaje</strong>
            </label>
            <textarea
              id="container__area"
              type="text"
              name="message"
              maxLength="300"
              placeholder="Write the reason for the contact in less than 300 characters please"
              onChange={handleChange}
            ></textarea>
          </div>
          <div id="container__submit">
            <input type="submit" name="submit" value="Enviar" onClick={handleSubmit}></input>
          </div>
        </form>
      </div>
      <div className="contactcards">
        <ContactCard />
      </div>
    </div>
  );
};

export default ContactForm;
