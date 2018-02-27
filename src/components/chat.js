import React from 'react';
import { withStyles } from 'material-ui/styles';

import MessageInput from './messageInput';
import MessageWrap from './chatList';


const styles = theme => ({
    chatLayout: {
        'padding-top': '60px',
        height: '100vh',
        width: '100%',
        'box-sizing': 'border-box',
    },
})

const Chat = ({ classes, messages }) => (
    <main className={classes.chatLayout}>
        <MessageWrap messages = {messages} />
        <MessageInput/>
    </main>
)

export default withStyles(styles)(Chat);
