import React from 'react';
import { withStyles } from 'material-ui/styles';
import { TextField } from 'material-ui';

const styles = theme => ({

    drawerHeader: {
        padding: '0 20px',
        height: '67px',
    },
});

const SidebarSearch = ({ classes}) => (
    <div className={classes.drawerHeader}>
        <TextField
            fullWidth
            margin="normal"
            placeholder="Search chats..."
        /> 
    </div>
)

export default withStyles(styles)(SidebarSearch);
