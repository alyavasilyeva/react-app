import React from 'react';
import List from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

import SidebarListItem from './sidebarListItem';

const styles = theme => ({
    chatsList: {
        height: 'calc(100% - 100px)',
        'overflow-y': 'scroll',
        'overflow-x': 'hidden',
    },
 })

const SidebarList = ({ classes, chats }) => (
    <List className={classes.chatsList}>
        {chats.map((chat, index) =>(
            <SidebarListItem key = {index} {...chat}/>
        ))}
    </List>
)

export default withStyles(styles)(SidebarList);
