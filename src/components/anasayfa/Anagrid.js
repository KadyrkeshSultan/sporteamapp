import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'

const styles = () => ({
    root: {
        background: 'url("./img/wall.jpg");',
        padding: 6,
    },
    paper: {
        height: '-webkit-fill-available',
        background: 'rgba(0,0,0,0.5)',

        padding: '24px',

    },
    gridList: {
        //width: '100%',
        //height: '100%',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        //  transform: 'translateZ(0)',
    },
    titleBar: {
        background: 'rgba(0,0,0,0.3)',
        height: '-webkit-fill-available',
        borderRadius: '8px',
    },
    icon: {
        color: 'white',
    },
    h: {
        textAlign: 'center',
        fontSize: '70px',
        color: 'white'
    },
    i: {


    },
    p: {
        color: 'white',
        textAlign: '-webkit-center'
    }
});

function Anagrid(props) {
    const { classes, uid } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>

                <GridListTile >
                    <Link underline="none" component={RouterLink} to={"/myevents/" + uid}>
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="fas fa-calendar-week"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Мои мероприятия
                            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>
                <GridListTile >
                    <Link underline="none" component={RouterLink} to="/events">
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="far fa-calendar-alt"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Все мероприятия
            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>
                <GridListTile >
                    <Link underline="none" component={RouterLink} to="/areas">
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="fab fa-laravel"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Площадки
            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>
                <GridListTile >
                    <Link underline="none" component={RouterLink} to="/news">
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="fas fa-newspaper"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Новости
            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>
                <GridListTile >
                    <Link underline="none" component={RouterLink} to="/users">
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="fas fa-user-friends"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Участники
                            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>
                <GridListTile >
                    <Link underline="none" component={RouterLink} to="/events/create">
                        <Paper className={classes.paper} elevation={1}>
                            <Typography variant="h5" component="h3" className={classes.h}>
                                <i className="fas fa-plus"></i>
                            </Typography>
                            <Typography component="p" className={classes.p}>
                                Создать
            </Typography>
                        </Paper>
                    </Link>
                </GridListTile>

            </GridList>
        </div>
    );
}

export default withStyles(styles)(Anagrid);