import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../Styles/Container.styles";
import "./SignUp.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="page-title">
        <h2>Create your account</h2>
      </div>
      <Container>
        <div className="sign-up-container">
          <h2>Create your new account</h2>
          <form className="create-form-field" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input-field"
              placeholder="First Name"
              {...register("firstName", { required: true })}
            />
            <br />
            <input
              className="input-field"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
            <br />
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <br />
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <br />
            <input
              className="input-field"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: true })}
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input className="input-field" type="submit" value="Sign Up" />
          </form>
          <span className="divider">-------------OR-------------</span>
          <button className="google-account-btn">Google</button>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
