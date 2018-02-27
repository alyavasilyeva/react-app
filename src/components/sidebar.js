import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

// import {chats, messages} from '../mock-data.json';
import SidebarSearch from './sidebarSearch';
import SidebarList from './sidebarList';
import NewChatBtn from './newChatBtn';
import SidebarNav from './sidebarNav';




const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: 320,
    },
});

const Sidebar = ({ classes, chats }) => (
    <Drawer 
        variant="permanent"
        classes={{
        paper: classes.drawerPaper,
        }}
    >
        <SidebarSearch />
        <Divider />
        <SidebarList chats={chats} />
        <NewChatBtn />
        <SidebarNav />
    </Drawer>
);

export default withStyles(styles)(Sidebar);
