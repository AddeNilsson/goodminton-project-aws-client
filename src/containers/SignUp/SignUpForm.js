import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

const SignUpForm = ({
  username,
  email,
  password,
  passwordConfirm,
  setFields,
  handleSubmit,

}) => (
  <form className="form flex flex-column" autoComplete="off">
    <label htmlFor="username">Username</label>
    <input
      id="username"
      value={username}
      onChange={setFields}
    />
  <label htmlFor="email">Email</label>
    <input
      id="email"
      value={email}
      onChange={setFields}
    />
    <label htmlFor="psw">Password</label>
    <input
      id="password"
      value={password}
      onChange={setFields}
      type="password"
    />
    <label htmlFor="passwordConfirm">Confirm Password</label>
    <input
      id="passwordConfirm"
      value={passwordConfirm}
      onChange={setFields}
      type="password"
    />
    <Button
      handleClick={handleSubmit}
      disabled={password.length < 5 || password !== passwordConfirm}
      color="blue"
      className="text-right"
    >Create Account</Button>
  </form>
);

SignUpForm.propTypes = {};

export default SignUpForm;
