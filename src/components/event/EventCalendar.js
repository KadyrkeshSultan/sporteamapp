import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker,Calendar } from 'material-ui-pickers';
import ruLocale from 'date-fns/locale/ru';
import { Paper } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
    chooseEventlistDate
} from '../../store/actions/eventActions';

const styles = {
  grid: {
    width: '100%',
  },
};

class EventCalendar extends React.Component {
  handleDateChange = date => {
      this.props.chooseEventlistDate(date);
  };

  render() {
    const { classes } = this.props;
    const { date } = this.props;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
        <Grid container className={classes.grid} justify="space-around">
            <Paper style={{ overflow: "hidden" }}>
                <Calendar date={date} onChange={this.handleDateChange} />
            </Paper>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        date: state.event.eventListDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseEventlistDate: (date) => dispatch(chooseEventlistDate(date))
    }
}
  export default compose(
      withStyles(styles),
      connect(mapStateToProps, mapDispatchToProps),
  )(EventCalendar);