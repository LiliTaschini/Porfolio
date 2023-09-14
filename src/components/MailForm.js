import { useState } from "react";
import contactImg from "../assets/img/contact-img.png";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const MailForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const form = useRef();
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_khrc9sq",
        "template_7pfdhfg",
        form.current,
        "1lJIAGlh1qh7smDmy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setButtonText("Sending...");
    setFormDetails(formInitialDetails);
    
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={8}>
            <h2>Get in touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={12} className="px-1">
                  <input
                    name="first-name"
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    name="last-name"
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  ></input>
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    name="email"
                    className="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address *"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  ></input>
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    name="phone"
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  ></input>
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    name="message"
                    className="mje"
                    row="12"
                    value={formDetails.message}
                    placeholder="Message *"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                </Col>
                <Col className="px-1 text-center">
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
