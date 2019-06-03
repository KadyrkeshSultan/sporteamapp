import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  card:{
      
  }
};

function UserCard(props) {
    const { classes, user} = props;
    var likeSport = 'Футбол';
    var userCity = 'Астана';

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {user && user.firstName + " " + user.lastName}
          </Typography>
          <Typography component="p">
            Любимый спорт: {likeSport} <br/>
            Город: {userCity}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <IconButton>
              <CallIcon></CallIcon>
          </IconButton>
          <IconButton>
              <EmailIcon></EmailIcon>
          </IconButton>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(UserCard);