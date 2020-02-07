import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

import Backdrop from '../Backdrop';
import Grid from '../Grid';
import IconButton from '../IconButton';
import './Drawer.scss';

const Drawer = ({ open, closeDrawer, drawerTitle, children }) => {
  return (
    <Backdrop show={open}>
      <div id="foo" className={`drawer ${open ? 'show' : 'hide'}`}>
        { open &&
          <>
            <Grid row gutters classes="drawer-header flex-align-center">
              <Grid xs={2}>
                <IconButton handleClick={closeDrawer}>
                  <MaterialIcon icon="close" color="#fff" />
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

};

export default Drawer;
