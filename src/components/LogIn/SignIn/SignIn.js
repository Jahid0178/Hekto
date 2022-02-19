import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Container from "../../Styles/Container.styles";
import "./SignIn.css";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <Container>
          <div className="page-title">
            <h2>Login Account</h2>
          </div>
          <div className="signin-container">
            <div className="login-container">
              <h2>Login</h2>
              <p>Please login using account detail bellow.</p>
              <form className="form-field" onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Email Address"
                  className="input-field"
                  type="email"
                  {...register("email", { required: true })}
                />
                <br />
                <input
                  placeholder="Password"
                  className="input-field"
                  type="password"
                  {...register("password", { required: true })}
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className="input-field" type="submit" value="Sign In" />
                <br />
                <Link className="create-account-link" to="#">
                  Don't have an account?Create account
                </Link>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SignIn;
