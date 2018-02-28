import React from 'react';
import { withStyles } from 'material-ui/styles';

import AppHeaderWide from './AppHeaderWide';
import LogInForm from './WelcomeForm';

const styles = theme => ({
 
});

const WelcomePage = ({ classes }) => (
    <div>
        <AppHeaderWide/>
        <LogInForm/>
    </div>
);

export default withStyles(styles)(WelcomePage);
