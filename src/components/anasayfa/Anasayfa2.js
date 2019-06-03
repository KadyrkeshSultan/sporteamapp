import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Anagrid from './Anagrid'
import { compose } from 'redux';
import { connect } from 'react-redux';

class Anasayfa2 extends React.Component {
    render() {
        const { auth } = this.props;
        
        return <React.Fragment>
            <CssBaseline />
            
            <Anagrid uid={auth.uid}/>
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps)
)(Anasayfa2);