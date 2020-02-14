import React from 'react'
import PropTypes from 'prop-types'

import Grid from '../Grid';
import Backdrop from '../Backdrop';
import IconButton from '../IconButton';
import './Modal.scss';

const Modal = ({
  show, closeModal, title, children, maxWidth,
}) =>  (
  <div className="modal">
    <Backdrop show={show}>
      <Grid row classes="modal-wrapper">
        <div className={`modal-content max-width-${maxWidth} ${show ? 'show' : 'hide'}`}>
          <Grid row gutters classes="modal-header flex-align-center">
            <Grid xs={8}>
              <h3>{ title }</h3>
            </Grid>
            <Grid xs={4}>
              <div className="text-right">
                <IconButton handleClick={closeModal}>
                  <i className="material-icons">close</i>
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <div className="modal-body">
            { children }
          </div>
        </div>
      </Grid>
    </Backdrop>
  </div>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  title: PropTypes.string,
  maxWidth: PropTypes.oneOf([
    'sm', 'md', 'lg',
  ]),
  show: PropTypes.bool.isRequired,
};

Modal.defaultProps = {
  maxWidth: 'md',
  fullWidth: false,
  title: '',
};

export default Modal;
