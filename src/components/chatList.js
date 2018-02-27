import React from 'react';
import { withStyles } from 'material-ui/styles';

import ChatMessage from './chatMessage';

const styles = theme => ({ 
    messagesWrapper: {
        height: 'calc(100% - 62px)',
        padding: '20px',
        'overflow-y': 'scroll',
        'overflow-x': 'hidden',
        'box-sizing': 'border-box',
    },
})

class MessageWrap extends React.Component {

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
            <div className={classes.messagesWrapper} ref="messagesWrapper">
                {messages && messages.map((message, index) => (
                    <ChatMessage key={index} {...message} />
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(MessageWrap);
