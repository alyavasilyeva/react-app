import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    
      appBar: {
        width: `calc(100% - 320px)`,
      },
      'appBar-left': {
        marginLeft: 320,
      },
      'appBar-right': {
        marginRight: 320,
      },
      
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
      },
})

const AppHeader = ({ classes }) => (
    <AppBar
        position="absolute"
        className={(classes.appBar)}
        >
        <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
            DogeCodes React
            </Typography>
        </Toolbar>
    </AppBar>
)

export default withStyles(styles)(AppHeader);
