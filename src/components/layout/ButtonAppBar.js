import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { compose } from 'redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/EventAvailable';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import MapIcon from '@material-ui/icons/Map';
import ShareDialog from './ShareDialog';
import { Link as RouterLink } from 'react-router-dom'

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
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
    list: {
        width: 250,
    },
};

const menuIcons = [
    {
        text: 'Главная',
        url: '/',
        icon: <HomeIcon />
    },
    {
        text: 'Все мероприятия',
        url: '/events',
        icon: <EventIcon/>
    },
    {
        text: 'Площадки',
        url: '/areas',
        icon: <MapIcon/>
    },
    {
        text: 'Участники',
        url: '/users',
        icon: <PeopleIcon/>
    },
]

const submenuIcons = [
    {
        text: 'Обратная связь',
        url: '/feedback'
    },
    {
        text: 'О проекте',
        url: '/about'
    },
]

class ButtonAppBar extends React.Component {
    state = {
        open: false,
        openDialog: false,
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        });
    };

    shareOnClick = () => () => {
        this.setState({
            openDialog: true,
        });
    }

    handleShareDialogClose = () => {
        this.setState({ openDialog: false });
    };

    render() {
        const { classes } = this.props;
        
        const sideList = (
            <div className={classes.list}>
              <List>
                  {
                      menuIcons.map(item => {
                          return <ListItem button component={RouterLink} to={item.url} key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                          </ListItem>
                      })
                  }
                  <ListItem button >
                                <ListItemIcon><ShareIcon/></ListItemIcon>
                                <ListItemText onClick={this.shareOnClick()} primary={'Поделиться'} />
                    </ListItem>
              </List>
              <Divider />
              <List>
                  {
                      submenuIcons.map((item) => (
                          <ListItem button component={RouterLink} key={item.text} to={item.url}>
                                <ListItemText primary={item.text} />
                          </ListItem>
                      ))
                  }
              </List>
            </div>
          );

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Sport Calendar
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    open={this.state.open}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                    >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
                <ShareDialog
                    open={this.state.openDialog}
                    onClose={this.handleShareDialogClose}
                />
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(ButtonAppBar);