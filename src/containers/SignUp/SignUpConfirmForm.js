import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

const SignUpForm = ({
  confirmationCode,
  email,
  password,
  setFields,
  handleSubmit,
}) => (
  <form className="form flex flex-column" autoComplete="off">
    <label htmlFor="email">Account email to confirm</label>
    <input
      id="email"
      value={email}
      onChange={setFields}
    />
  <label htmlFor="password">Password</label>
    <input
      id="password"
      type="password"
      value={password}
      onChange={setFields}
    />
    <label htmlFor="confirmationCode">Confirmation Code</label>
    <input
      id="confirmationCode"
      value={confirmationCode}
      onChange={setFields}
    />
    <Button
      handleClick={handleSubmit}
      disabled={confirmationCode.length < 3}
      color="blue"
      className="text-right"
    >Confirm</Button>
  </form>
);

SignUpForm.propTypes = {};

export default SignUpForm;
