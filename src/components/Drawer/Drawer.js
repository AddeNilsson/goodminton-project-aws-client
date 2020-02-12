import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import IconButton from '../IconButton';
import './Drawer.scss';

const Drawer = ({ open, closeDrawer, drawerTitle, children }) => {
  return (
    <Backdrop show={open}>
      <div className={`drawer ${open ? 'show' : 'hide'}`}>
        { open &&
          <>
            <Grid row gutters classes="drawer-header flex-align-center">
              <Grid xs={2}>
                <IconButton handleClick={closeDrawer}>
                  <i className="material-icons text-white">close</i>
                </IconButton>
              </Grid>
              <Grid xs={10}>
                <h4>{ drawerTitle }</h4>
              </Grid>
            </Grid>
            <div>
              { children }
            </div>
          </>
        }
      </div>
    </Backdrop>
  );
};

Drawer.propTypes = {
  closeDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  drawerTitle: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Drawer.defaultProps = {
  title: '',
};

export default Drawer;
