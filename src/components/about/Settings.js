import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {signOut} from '../../store/actions/authActions';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Settings extends React.Component {
  state = {
    expanded: 'panel3',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  handleSignOut = () => {
      this.props.signOut();
  }

  render() {
    const { classes, auth } = this.props;
    const { expanded } = this.state;

    if (!auth.uid) return <Redirect to='/login' />

    return (
      <div className={classes.root}>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Настройки профиля
            </Typography>
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><AccountIcon/> </Typography>
            <Typography className={classes.secondaryHeading}>Общее</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Тут будут настройки профиля
            </Typography>
          </ExpansionPanelDetails>
          <Divider />
            <ExpansionPanelActions>
            <Button size="small">Отменить</Button>
            <Button size="small" variant='outlined' color="primary">
                Сохранить
            </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><InfoIcon /> </Typography>
            <Typography className={classes.secondaryHeading}>
              Учетная запись
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Тут будут настройки учетной записи
            </Typography>
          </ExpansionPanelDetails>
          <Divider />
            <ExpansionPanelActions>
            <Button size="small">Отменить</Button>
            <Button size="small" variant='outlined' color="primary">
                Сохранить
            </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
        <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}><ExitIcon /> </Typography>
            <Typography className={classes.secondaryHeading}>
              Выйти из аккаунта
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{justifyContent: 'center',}}>
            <Typography>
              <Button variant='outlined' onClick={this.handleSignOut}>Выйти</Button>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

  export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
    // firestoreConnect(() => {
    //     return [
    //         { 
    //             collection: 'users',
    //         },
    //     ]
    // })
)(Settings);