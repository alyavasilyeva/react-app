import React from 'react';
import {ListItem, ListItemText} from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import Avatar from './avatar';

const styles = theme => ({

})

const SidebarListItem = ({ classes, index, title }) => (
    <ListItem key={index} button>
        <Avatar colorFrom={title}>{title}</Avatar>
        <ListItemText primary={title} secondary="05.06.2017"/>
    </ListItem>
)

export default withStyles(styles)(SidebarListItem);
