import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
    newChatButton: {
        position: 'absolute',
        bottom: '60px',
        right: '20px',
    },
});

const NewChatBtn = ({ classes }) => (
    <Button
        variant="fab"
        color="primary"
        className={classes.newChatButton}
    >
        <AddIcon />
    </Button>
);

export default withStyles(styles)(NewChatBtn);
