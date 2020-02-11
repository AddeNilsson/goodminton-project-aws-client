import React from 'react';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import './LoadingSpinner.scss';

const Spinner = ({ active }) => (
  active && (
    <Grid row classes="flex-center align-center">
      <div className="ripple">
        <div />
        <div />
      </div>
    </Grid>
  )
);

const BlockingSpinner = ({ active }) => (
  active && (
    <Backdrop show={active} dark>
      <Grid row classes="flex-center align-center">
        <div className="ripple">
          <div />
          <div />
        </div>
      </Grid>
    </Backdrop>
  )
);

const LoadingSpinner = (props) => (
  props.blocker
    ? <BlockingSpinner {...props} />
    : <Spinner {...props} />
);

export default LoadingSpinner;
