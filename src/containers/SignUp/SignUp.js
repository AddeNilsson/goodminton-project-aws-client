import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { signUpUser, confirmSignUpAndLogIn, togglePendingConfirmAccount } from '../../actions/authActions';
import useFormFields from '../../hooks/useFormFields';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import { Card, CardContent } from '../../components/Card';
import SignUpForm from './SignUpForm';
import SignUpConfirmForm from './SignUpConfirmForm';

const SignUp = ({ signUpUser, history, isAuthenticated, confirmSignUp, pendingConfirm, togglePendingConfirm }) => {
  const [fields, setFields] = useFormFields({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    confirmationCode: ''
  });
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);
  const { username, password, confirmationCode, email } = fields;

  const handleSignUpSubmit = e => {
    e.preventDefault();
    signUpUser({ email, password });
  };

  const handleConfirmationSubmit = e => {
    e.preventDefault();
    confirmSignUp({ email, confirmationCode, password, username });
  };

  return (
    <div id="sign-up">
      <Grid row classes="flex-center">
        <Grid xs={12} sm={10} md={8} lg={4}>
          <Card>
            <CardContent>
              {isAuthenticated && (
                <p className="text-body">
                  You're already signed in!
                  <Link to="/dashboard">Home</Link>
                </p>)}
              <h1>Create Account</h1>
              {pendingConfirm
                ? <SignUpConfirmForm
                    {...fields}
                    setFields={setFields}
                    handleSubmit={handleConfirmationSubmit}
                  />
                : <SignUpForm
                    {...fields}
                    setFields={setFields}
                    handleSubmit={handleSignUpSubmit}
                  />
              }
            </CardContent>
            <CardContent>
              <Grid row classes="flex-align-center">
                <Grid xs={6}>
                  <Link to="sign-in">Sign in</Link>
                </Grid>
                <Grid xs={6} classes="text-right">
                  <Button
                    handleClick={() => togglePendingConfirm()}
                    color="blue"
                    >{ pendingConfirm ? 'Create' :'Confirm' } an account</Button>
                </Grid>
            </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
};

SignUp.propTypes = { };

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  pendingConfirm: state.auth.pendingConfirm,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signUpUser,
  togglePendingConfirm: togglePendingConfirmAccount,
  confirmSignUp: confirmSignUpAndLogIn,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
