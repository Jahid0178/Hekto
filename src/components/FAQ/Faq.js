import React from "react";
import Container from "../Styles/Container.styles";
import "./Faq.css";
import { useForm } from "react-hook-form";

const Faq = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="page-title">
        <h2>FAQ</h2>
      </div>
      <div>
        <Container>
          <div className="faq-container">
            <div className="faq-content">
              <h2 className="faq-title">General Information</h2>
              <ul className="general-information-content">
                <li className="general-information-li">
                  <h2>Eu dictumst cum at sed euismood condimentum?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </li>
                <li className="general-information-li">
                  <h2>Magna bibendum est fermentum eros.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </li>
                <li className="general-information-li">
                  <h2>Odio muskana hak eris conseekin sceleton?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </li>
                <li className="general-information-li">
                  <h2>Elit id blandit sabara boi velit gua mara?</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt sed tristique mollis vitae, consequat gravida
                    sagittis.
                  </p>
                </li>
              </ul>
            </div>
            <div className="question-content">
              <h2 className="question-title">Ask A Question</h2>
              <div className="question-form-content">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="question-input-field"
                    placeholder="Your Name*"
                    {...register("example", { required: true })}
                  />

                  <input
                    className="question-input-field"
                    placeholder="Subject*"
                    {...register("exampleRequired", { required: true })}
                  />

                  <textarea
                    placeholder="Type Your Message*"
                    rows="10"
                    className="question-message-box"
                    {...register("exampleRequired", { required: true })}
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br />
                  <input className="submit-btn" type="submit" />
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
