import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import blue from '@material-ui/core/colors/blue';
import YandexShare from './YandexShare';

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class ShareDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { open } = this.props;

    return (
      <Dialog onClose={this.handleClose} open={open} aria-labelledby="simple-dialog-title">
        <DialogTitle id="simple-dialog-title">Поделиться</DialogTitle>
        <DialogContent>
              <YandexShare/>
          </DialogContent>
      </Dialog>
    );
  }
}

export default withStyles(styles)(ShareDialog);