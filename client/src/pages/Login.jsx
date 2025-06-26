import { useState } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, Link } from "react-router-dom";
import { useActionData } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const errors= useActionData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <div className="password-input-wrapper">
          <FormRow
            type={showPassword ? "text" : "password"}
            name="password"
            defaultValue="secret123"
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        {errors && <p style={{ color: 'red' }}>{errors.msg}</p>}
        <Link to="/dashboard" className="btn btn-block">Explore the App</Link>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
