import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import { loginUser } from '../../actions/authActions'

const SignIn = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setUsername('');
    setPassword('');
  }
  return (
    <div className='panel-wrap'>
      <div className='panel'>
        <div className='panel-header'>
          <h4>Logga in</h4>
        </div>
        <form className='panel-body' onSubmit={e => handleSubmit(e)} autoComplete="off">
          <input
            value={username}
            className='panel-row'
            type='text'
            id='username'
            onChange={e => setUsername(e.target.value)}
          />
          <input
            value={password}
            className='panel-row'
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
          />
          <button className='btn btn-primary'>Logga in</button>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginUser
}, dispatch)

export default connect(
  mapDispatchToProps
)(SignIn);
