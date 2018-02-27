import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import titleInitials from '../utils/title-initials.js';
import Avatar from 'material-ui/Avatar';

// import {chats, messages} from '../mock-data.json';

const styles = theme => ({
    chatLayout: {
        padding: '60px 0',
        height: '100vh',
        width: '100%',
        'box-sizing': 'border-box',
    },

    messagesWrapper: {
        height: 'calc(100% - 40px)',
        padding: '20px',
        'overflow-y': 'scroll',
        'overflow-x': 'hidden',
    },

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
    },

    messageInputWrapper: {
        position: 'fixed',
        width: '70%',
        margin: 'auto',
        bottom: '10px', 
    },

    messageInput: {
        padding: '5px 20px',
    },

})

class Chat extends React.Component {

    componentDidMount(){
        this.scrollDownHistory();
    }

    componentDidUpdate(){
        this.scrollDownHistory();
    }

    scrollDownHistory(){
        const messagesWrapper = this.refs.messagesWrapper;

        if(messagesWrapper) {
            messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
        }
    }

    render() {
        const {classes, messages} = this.props;
        return(
            <main className={classes.chatLayout}>
                <div className={classes.messagesWrapper} ref="messagesWrapper">
                    {messages && messages.map((message, index) => {
                        const isMessageFromMe = message.sender === 'me';

                        const userAvatar = (
                            <Avatar>
                                {titleInitials(message.sender)}
                            </Avatar>
                        );

                        return (
                            <div key={index} className={classnames(
                                classes.messageWrapper,
                                isMessageFromMe && classes.messageWrapperFromMe
                            )}>

                                {!isMessageFromMe && userAvatar}
                                <Paper className = {classnames(
                                    classes.message,
                                    isMessageFromMe && classes.messageFromMe
                                )}>
                                    <Typography variant='caption'>
                                        {message.sender}
                                    </Typography>
                                    <Typography variant='body1'>
                                        {message.content}
                                    </Typography>
                                    <Typography variant='caption'>
                                        1 min ago
                                    </Typography>
                                </Paper>
                                {isMessageFromMe && userAvatar}
                            </div>
                        );
                    })}
                    <div className={classes.messageInputWrapper}>
                    <Paper className={classes.messageInput} elevation={6}>
                        <Input
                            className={classes.messageInputField}
                            fullWidth
                            placeholder="Start typing your message"
                            multiline
                            inputProps={{
                                'aria-label': 'Message',
                            }}
                        />
                    </Paper>
                </div>
                </div>
            </main>
        )
    }
};

export default withStyles(styles)(Chat);
