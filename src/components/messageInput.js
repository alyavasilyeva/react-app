import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

const styles = theme => ({ 
    messageInputWrapper: {
        position: 'fixed',
        width: 'calc(100% - 320px)',
        bottom: '0', 
        left: 'auto',
        right: '0',
    },

    messageInput: {
        padding: '15px 20px',
    },
});

class MessageInput extends React.Component {
    render() {
        const { classes } = this.props;

        return(
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
        )
    }
};

export default withStyles(styles)(MessageInput);
