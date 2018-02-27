import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import { TextField } from 'material-ui';
import Divider from 'material-ui/Divider';

// import {chats, messages} from '../mock-data.json';
import titleInitials from '../utils/title-initials.js';

import AddIcon from 'material-ui-icons/Add';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';



const styles = theme => ({
    drawerHeader: {
        padding: '0 20px',
        height: '67px',
    },

    newChatButton: {
        position: 'absolute',
        bottom: '60px',
        right: '20px',
    },

    drawerPaper: {
        position: 'relative',
        width: 320,
    },

    chatsList: {
        height: 'calc(100% - 100px)',
        'overflow-y': 'scroll',
        'overflow-x': 'hidden',
    },
});

const Sidebar = ({ classes, chats }) => (
    <Drawer 
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <TextField
                fullWidth
                margin="normal"
                placeholder="Search chats..."
            /> 
        </div>
        <Divider />
        <List className={classes.chatsList}>
            {chats.map((chat, index) =>(
                <ListItem key={index} button>
                    <Avatar>{titleInitials(chat.title)}</Avatar>
                    <ListItemText primary={chat.title} secondary="05.06.2017"/>
                </ListItem>
            ))}
        </List>
        <Button
            variant="fab"
            color="primary"
            className={classes.newChatButton}
        >
            <AddIcon />
        </Button>
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
    </Drawer>
);

export default withStyles(styles)(Sidebar);
