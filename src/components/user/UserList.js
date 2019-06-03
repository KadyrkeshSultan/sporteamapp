import React from 'react';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import UserCard from './UserCard';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 1}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '30%', // 16:9
    borderRadius: '50%',
    margin: '0 auto',
    width: 110,
  },
  cardContent: {
    flexGrow: 1,
  },
  paperInput:{
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


function UserList(props) {
  const { classes, users } = props;
    console.log(users);
  return (
    <React.Fragment>
      <main>
        <div>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              Участники
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Найди участников к себе в команду
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container justify="center">
                <Grid item>
                    <Paper className={classes.paperInput} elevation={1}>
                        <InputBase className={classes.input} placeholder="Поиск участников" />
                        <IconButton className={classes.iconButton} aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} justify='center'>
            {users && users.map(user => (
              <Grid item key={user.id} xs={12} sm={6} md={4} lg={4}>
                <UserCard user={user}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
    return {
      users: state.firestore.ordered.users,
      auth: state.firebase.auth,
    }
  }

  export default compose(
    withStyles(styles),
    connect(mapStateToProps),
    firestoreConnect(() => {
        return [
            { 
                collection: 'users',
            },
        ]
    })
)(UserList)