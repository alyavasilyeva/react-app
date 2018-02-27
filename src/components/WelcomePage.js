import React from 'react';
import { withStyles } from 'material-ui/styles';

import AppHeader from './appHeader';

const styles = theme => ({
 
});

const WelcomePage = ({ classes }) => (
    <AppHeader/>
);

export default withStyles(styles)(WelcomePage);
