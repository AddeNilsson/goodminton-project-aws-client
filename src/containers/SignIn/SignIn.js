import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions/authActions';
import useFormFields from '../../hooks/useFormFields';
import Grid from '../../components/Grid';
import { Card, CardContent } from '../../components/Card';
import Button from '../../components/Button';

const SignIn = ({ loginUser, isAuthenticated = false }) => {
  const [fields, setFields] = useFormFields({ username: '', password: '' });
  const { username, password } = fields;
  const handleSubmit = e => {
    e.preventDefault();
    loginUser({ username, password });
  }
  const isValid = () => (!(username.length > 5 && password.length > 7));

  return (
    <div id="sign-in">
      <Grid row classes="flex-center">
        <Grid xs={12} sm={10} md={8} lg={4}>
          <Card>
            <CardContent>
              {isAuthenticated
                ? (
                  <p className="text-body">
                    You're already signed in!
                    <Link to="/dashboard">Home</Link>
                  </p>
                )
                : (
                  <div>
                    <h1>Welcome!</h1>
                    <p className="text-body-alt">
                      Please sign in below or <Link to="/sign-up">Create Account</Link>
                    </p>
                    <form className='form flex flex-column' onSubmit={e => handleSubmit(e)} autoComplete="off">
                      <label htmlFor="email">Email</label>
                      <input
                        id="username"
                        value={username}
                        onChange={setFields}
                      />
                    <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        value={password}
                        type="password"
                        onChange={setFields}
                        // v-on:keypress.enter="handleSignIn"
                      />
                    <Button
                      handleClick={handleSubmit}
                      disabled={isValid()}
                      color="blue"
                      className="text-right"
                    >Sign In </Button>
                    </form>
                  </div>
                )
              }
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
