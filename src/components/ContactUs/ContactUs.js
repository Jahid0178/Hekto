import React from "react";
import Container from "../Styles/Container.styles";
import "./ContactUs.css";
import contactImage from "../../assets/Contact/contact-img.png";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="page-title">
        <h1>Contact Us</h1>
      </div>
      <Container>
        <div>
          <div className="contacts-container">
            <div>
              <h2 className="about-us-header">Information About us</h2>
              <p className="about-us-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                vitae lobortis quis bibendum quam.
              </p>
            </div>
            <div>
              <h2 className="contact-header">Contact Way</h2>
              <div className="contact-way-container">
                <div className="contact-content">
                  <p>Tel: +877-67-88-99</p>
                  <p>Email: Shop@store.com</p>
                </div>
                <div className="contact-content">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
                <div className="contact-content">
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
                <div className="contact-content">
                  <p>
                    Free standard shipping <br /> on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="get-in-touch-container">
            <div className="form-content">
              <h2>Get In Touch</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                neque ultrices tristique amet erat vitae eget dolor los vitae
                lobortis quis bibendum quam.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="contact-input"
                  placeholder="Your Name*"
                  {...register("name", { required: true })}
                />
                <input
                  className="contact-input"
                  placeholder="Your E-mail*"
                  {...register("email", { required: true })}
                />
                <input
                  className="contact-input"
                  placeholder="Subject*"
                  {...register("subject", { required: true })}
                />
                <textarea
                  className="message-box"
                  cols="50"
                  rows="10"
                  placeholder="Type Your Message*"
                  {...register("message", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="submit-btn" type="submit" />
              </form>
            </div>
            <div className="contact-img-container">
              <img className="contact-img" src={contactImage} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
