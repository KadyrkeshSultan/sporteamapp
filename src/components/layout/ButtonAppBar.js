import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect } from 'react-redux';
import {compose} from 'redux';
import Button from '@material-ui/core/Button';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    
  },
  grow: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, auth } = props;
  const authLinks = !auth.uid ? <SignedOutLinks /> : <SignedInLinks />
  return (
    <div className={classes.root}>
      <AppBar position="static" color='default' className={classes.appBar}>
        <Toolbar>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Спортивный календарь
          </Typography>
          <Button href='/'>Главная</Button>
          <Button href='/help'>Справка</Button>
          {
              authLinks
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps),
)(ButtonAppBar);