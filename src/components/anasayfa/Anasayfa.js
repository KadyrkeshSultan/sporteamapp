import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router-dom'
import Anagrid from './Anagrid'

class Anasayfa extends React.Component {
    render() {
        return <React.Fragment>
            <CssBaseline />
            
            <Anagrid/>
        </React.Fragment>
    }
}

export default Anasayfa;