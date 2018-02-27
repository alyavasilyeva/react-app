import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Avatar from './avatar';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';


const styles = theme => ({ 
    messageWrapper: {
        display: 'flex',
        'margin-bottom': '20px',
        'align-items': 'center',
    },

    messageWrapperFromMe: {
        'justify-content': 'flex-end',
    },

    message: {
        'min-width': '10%',
        'max-width': '70%',
        padding: '5px 15px',
        'margin-left': '10px',
    },

    messageFromMe: {
        'margin-right': '10px', 
        'background-color': '#E1BEE7',
    },
})

const ChatMessage = ({ classes, sender, content }) => {
    const isMessageFromMe = sender === 'me';
    const userAvatar = (
        <Avatar colorFrom = {sender}>
            {sender}
        </Avatar>
    );

    return (
        <div className={classnames(
            classes.messageWrapper,
            isMessageFromMe && classes.messageWrapperFromMe
        )}>
            {!isMessageFromMe && userAvatar}
            <Paper className = {classnames(
                classes.message,
                isMessageFromMe && classes.messageFromMe
            )}>
                <Typography variant='caption'>
                    {sender}
                </Typography>
                <Typography variant='body1'>
                    {content}
                </Typography>
                <Typography variant='caption'>
                    1 min ago
                </Typography>
            </Paper>
            {isMessageFromMe && userAvatar}
        </div>
    )
}

export default withStyles(styles)(ChatMessage);
