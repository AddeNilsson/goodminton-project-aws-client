import React from 'react';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import './LoadingSpinner.scss';

const Spinner = ({ active, color }) => (
  active && (
    <Grid row classes="flex-center align-center spinner">
      <div className={`ripple ${color === 'dark' ? 'border-dark' : 'border-white'}`}>
        <div />
        <div />
      </div>
    </Grid>
  )
);

const BlockingSpinner = ({ active, color }) => (
  active && (
    <Backdrop show={active} dark>
      <Grid row classes="flex-center align-center block-spinner">
        <div className="ripple border-white">
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
