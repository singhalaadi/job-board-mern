import { useState } from 'react';
import {Form, Link} from 'react-router-dom';
import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' name='name' labelText='first name'/>
        <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />
        <div className="password-input-wrapper">
          <FormRow
            type={showPassword ? 'text' : 'password'}
            name='password'
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
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;